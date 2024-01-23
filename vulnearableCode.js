app.post('/forgot-password', async (req, res) => {
    // اعتبارسنجی دقیق تر ایمیل با الگوی مناسب
    const schema = Joi.object({
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: false } })
    })

    const { error } = schema.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message })

    try {
        const user = await User.findOne({ where: { email: req.body.email } })
        //تغییر در وضعیت HTTP به 404 برای موردی که کاربر یافت نشد. این کمک می‌کند تا وضعیت مناسب‌تری به کلاینت ارسال شود.
        if (!user) return res.status(404).json({ message: 'User not found' })


        // تولید توکن امن تر با طول بیشتر و هش کردن
        const resetToken = crypto.randomBytes(32).toString('hex')
        const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex')
        const resetTokenExpiration = Date.now() + 3600000 //افزایش طول توکن امن به 32 بایت و هش کردن آن با الگوریتم SHA-256. این اقدام باعث افزایش امنیت توکن می‌شود.

        // ذخیره توکن هش شده برای امنیت بیشتر
        await user.update({ resetTokenHash, resetTokenExpiration })

        sendResetEmail(req.body.email, resetToken)

        res.json({ message: 'Reset email sent successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})