// فرض کنید داده‌ها از دیتابیس گرفته شده است
const data = {
    feedbacks: {
        values: {
            "65a2575fd6a685e68963de13": ["test"]
        },
        inputs: {
            "65a2575fd6a685e68963de13": {
                id: "65a2575fd6a685e68963de13",
                label: "در کدام شهر هستید؟",
                formId: "65a25608d6a685e68963ddc3",
                stepId: "65a25608d6a685e68963ddc5",
                sectionId: "65a25608d6a685e68963ddc7",
                sortIndex: 11,
                placeholder: "شهر شما؟",
                visibleAccordingTo: [],
                isRequired: true,
                isHidden: false,
                isFullwidth: false,
                type: "text",
                minLength: 1,
                maxLength: 360
            }
        }
    }
}

// وظیفه یک: تابع برای بازگرداندن فیدبک‌ها با فرمت مورد نیاز
function formatFeedbacks(feedbacks) {
    const formattedFeedbacks = {}

    for (const key in feedbacks) {
        const feedbackArray = feedbacks[key]
        const formattedArray = feedbackArray.map((item, index) => {
            return {
                id: key,
                data: {
                    ...item,
                    sortIndex: index + 1
                }
            }
        })

        formattedFeedbacks[key] = formattedArray
    }

    return formattedFeedbacks
}

// وظیفه دو: تابع برای بازگرداندن همه‌ی فیلدها بر اساس شناسه
function getFeedbackById(feedbackId) {
    const feedback = data.feedbacks.inputs[feedbackId]
    return {
        id: feedbackId,
        data: {
            ...feedback,
            sortIndex: feedback.sortIndex
        }
    }
}

// وظیفه سه (اختیاری): تابع برای بازگرداندن فیدبک‌ها با ادغام داده‌های مرتبط از دو آرایه مختلف
function mergeFeedbacks(values, inputs) {
    const mergedFeedbacks = {}

    for (const key in values) {
        const valueArray = values[key]
        const inputObject = inputs[key]

        const mergedArray = valueArray.map(value => ({
            id: key, // اینجا تغییر داده شده است
            value,
            ...inputObject
        }))

        mergedFeedbacks[key] = mergedArray
    }

    return mergedFeedbacks
}

// تست وظایف
console.log("Task One:", formatFeedbacks(data.feedbacks.values))
console.log("Task Two:", getFeedbackById("65a2575fd6a685e68963de13"))
console.log("Optional Task Three:", mergeFeedbacks(data.feedbacks.values, data.feedbacks.inputs));

