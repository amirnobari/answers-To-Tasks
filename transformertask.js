const feedbacks = [
    {
        "id": "65a25608d6a685e68963ddc3",//*
        "title": "tese1",//*
        "relatedMediaId": "test",
        "creator": null,//*
        "isPublic": false,//*
        "steps": [
            {
                "id": "65a25608d6a685e68963ddc5",//*
                "title": "مرحله اول",//*
                "sortIndex": 1//*
            },
            {
                "id": "65a2577ed6a685e68963de90",
                "title": "مرحله دوم",
                "sortIndex": 0
            }
        ],
        "sections": [
            {
                "id": "65a25608d6a685e68963ddc7",//*
                "stepId": "65a25608d6a685e68963ddc5",//*
                "sortIndex": 0,//*
                "title": "بخش اول",//*
                "columnCount": 4,
                "isHidden": false//*
            },
            {
                "id": "65a25763d6a685e68963de64",
                "stepId": "65a25608d6a685e68963ddc5",
                "sortIndex": 2,
                "title": "بخش دوم",
                "columnCount": 1,
                "isHidden": false
            },
            {
                "id": "65a25780d6a685e68963de98",
                "stepId": "65a2577ed6a685e68963de90",
                "sortIndex": 3,
                "title": "بخش سوم",
                "columnCount": 1,
                "isHidden": false
            }
        ],
        "inputs": [
            {
                "id": "65a2575fd6a685e68963de13",//*
                "label": "در کدام شهر هستید؟",//*
                "formId": "65a25608d6a685e68963ddc3",//*
                "stepId": "65a25608d6a685e68963ddc5",//*
                "sectionId": "65a25608d6a685e68963ddc7",//*
                "sortIndex": 11,//*
                "placeholder": "شهر شما؟",
                "visibleAccordingTo": [],
                "isRequired": true,//*
                "isHidden": false,
                "isFullwidth": false,
                "type": "text",//*
                "minLength": 1,
                "maxLength": 360
            },
            {
                "id": "65a25760d6a685e68963de33",
                "label": "آدرس دقیق شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 1,
                "placeholder": "آدرس",
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "textarea",
                "minLength": 1,
                "maxLength": 1000
            },
            {
                "id": "65a25760d6a685e68963de35",
                "label": "میزان حقوق شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 6,
                "placeholder": "ریال",
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "number"
            },
            {
                "id": "65a25760d6a685e68963de37",
                "label": "واحد شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 3,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "radio",
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de3c",
                "label": "علایق شما",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 5,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "checkbox",
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de43",
                "label": "تعداد فرزند",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 4,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "select",
                "minSelectionCount": 1,
                "maxSelectionCount": 2,
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de48",
                "label": "تصویر شما",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 2,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "file",
                "accept": [
                    "mp4",
                    "jpg",
                    "png"
                ],
                "minFileSize": 10,
                "maxFileSize": 2048,
                "uploadCountLimit": 1
            },
            {
                "id": "65a25760d6a685e68963de4a",
                "label": "شماره موبایل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 7,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "mobile"
            },
            {
                "id": "65a25760d6a685e68963de4c",
                "label": "ایمیل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 8,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "email"
            },
            {
                "id": "65a25760d6a685e68963de4e",
                "label": "کد ملی",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 9,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "nationalId"
            },
            {
                "id": "65a25777d6a685e68963de80",
                "label": "تاریخ تولد",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25763d6a685e68963de64",
                "sortIndex": 10,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "date",
                "calendarType": "jalali",
                "pick": "yyyy/mm/dd",
                "minDate": "",
                "maxDate": ""
            },
            {
                "id": "65a25777d6a685e68963de88",
                "label": "ساعت تولد",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25763d6a685e68963de64",
                "sortIndex": 11,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "time"
            },
            {
                "id": "65a257a8d6a685e68963dea1",
                "label": "چقدر خوبی؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 0,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "rate",
                "startLabel": "کم",
                "endLabel": "خیلی",
                "maxRate": 10
            },
            {
                "id": "65a257a8d6a685e68963deac",
                "label": "امتیاز این فصل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 1,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "score",
                "maxScore": 10
            },
            {
                "id": "65a257a8d6a685e68963deae",
                "label": "موافقی؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 2,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "agreement",
                "description": "لورم",
                "checkboxLabel": "موافق هستم"
            }
        ],
        "feedback": {
            "id": "65a51417492de8ea53639092",//*
            "isPublic": false,//*
            "createdAt": "2024-01-15T11:16:39.951Z",
            "updatedAt": "2024-01-16T06:55:43.210Z",
            "isEditable": true,//*
            "values": {//*
                "65a2575fd6a685e68963de13": [
                    "test"
                ],
                "65a25760d6a685e68963de33": [
                    "test"
                ],
                "65a25760d6a685e68963de35": [
                    "test"
                ],
                "65a25760d6a685e68963de37": [
                    "test"
                ],
                "65a25760d6a685e68963de3c": [
                    "test"
                ],
                "65a25760d6a685e68963de43": [
                    "test"
                ],
                "65a25760d6a685e68963de48": [
                    "test"
                ],
                "65a25760d6a685e68963de4a": [
                    "test"
                ],
                "65a25760d6a685e68963de4c": [
                    "test"
                ],
                "65a25760d6a685e68963de4e": [
                    "test"
                ],
                "65a25777d6a685e68963de80": [
                    "2024-01-14T11:16:05.348Z"
                ],
                "65a25777d6a685e68963de88": [
                    "2024-01-15T11:16:07.464Z"
                ],
                "65a257a8d6a685e68963dea1": [
                    "test"
                ],
                "65a257a8d6a685e68963deac": [
                    "test"
                ],
                "65a257a8d6a685e68963deae": [
                    "test"
                ]
            },
            "title": "test"//*
        }
    },
    {
        "id": "65a25608d6a685e68963ddc3",
        "title": "tese1",
        "relatedMediaId": "test",
        "creator": null,
        "isPublic": false,
        "steps": [
            {
                "id": "65a25608d6a685e68963ddc5",
                "title": "مرحله اول",
                "sortIndex": 0
            },
            {
                "id": "65a2577ed6a685e68963de90",
                "title": "مرحله دوم",
                "sortIndex": 1
            }
        ],
        "sections": [
            {
                "id": "65a25608d6a685e68963ddc7",
                "stepId": "65a25608d6a685e68963ddc5",
                "sortIndex": 0,
                "title": "بخش اول",
                "columnCount": 1,
                "isHidden": false
            },
            {
                "id": "65a25763d6a685e68963de64",
                "stepId": "65a25608d6a685e68963ddc5",
                "sortIndex": 1,
                "title": "بخش دوم",
                "columnCount": 1,
                "isHidden": false
            },
            {
                "id": "65a25780d6a685e68963de98",
                "stepId": "65a2577ed6a685e68963de90",
                "sortIndex": 0,
                "title": "بخش سوم",
                "columnCount": 1,
                "isHidden": false
            }
        ],
        "inputs": [
            {
                "id": "65a2575fd6a685e68963de13",
                "label": "در کدام شهر هستید؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 0,
                "placeholder": "شهر شما؟",
                "visibleAccordingTo": [],
                "isRequired": true,
                "isHidden": false,
                "isFullwidth": false,
                "type": "text",
                "minLength": 1,
                "maxLength": 360
            },
            {
                "id": "65a25760d6a685e68963de33",
                "label": "آدرس دقیق شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 1,
                "placeholder": "آدرس",
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "textarea",
                "minLength": 1,
                "maxLength": 1000
            },
            {
                "id": "65a25760d6a685e68963de35",
                "label": "میزان حقوق شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 2,
                "placeholder": "ریال",
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "number"
            },
            {
                "id": "65a25760d6a685e68963de37",
                "label": "واحد شما؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 3,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "radio",
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de3c",
                "label": "علایق شما",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 4,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "checkbox",
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de43",
                "label": "تعداد فرزند",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 5,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "select",
                "minSelectionCount": 1,
                "maxSelectionCount": 2,
                "hasFieldCondition": false,
                "hasSectionCondition": false,
            },
            {
                "id": "65a25760d6a685e68963de48",
                "label": "تصویر شما",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 6,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "file",
                "accept": [
                    "mp4",
                    "jpg",
                    "png"
                ],
                "minFileSize": 10,
                "maxFileSize": 2048,
                "uploadCountLimit": 1
            },
            {
                "id": "65a25760d6a685e68963de4a",
                "label": "شماره موبایل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 7,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "mobile"
            },
            {
                "id": "65a25760d6a685e68963de4c",
                "label": "ایمیل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 8,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "email"
            },
            {
                "id": "65a25760d6a685e68963de4e",
                "label": "کد ملی",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25608d6a685e68963ddc7",
                "sortIndex": 9,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "nationalId"
            },
            {
                "id": "65a25777d6a685e68963de80",
                "label": "تاریخ تولد",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25763d6a685e68963de64",
                "sortIndex": 10,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "date",
                "calendarType": "jalali",
                "pick": "yyyy/mm/dd",
                "minDate": "",
                "maxDate": ""
            },
            {
                "id": "65a25777d6a685e68963de88",
                "label": "ساعت تولد",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a25608d6a685e68963ddc5",
                "sectionId": "65a25763d6a685e68963de64",
                "sortIndex": 11,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "time"
            },
            {
                "id": "65a257a8d6a685e68963dea1",
                "label": "چقدر خوبی؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 0,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "rate",
                "startLabel": "کم",
                "endLabel": "خیلی",
                "maxRate": 10
            },
            {
                "id": "65a257a8d6a685e68963deac",
                "label": "امتیاز این فصل",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 1,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "score",
                "maxScore": 10
            },
            {
                "id": "65a257a8d6a685e68963deae",
                "label": "موافقی؟",
                "formId": "65a25608d6a685e68963ddc3",
                "stepId": "65a2577ed6a685e68963de90",
                "sectionId": "65a25780d6a685e68963de98",
                "sortIndex": 2,
                "visibleAccordingTo": [],
                "isRequired": false,
                "isHidden": false,
                "isFullwidth": false,
                "type": "agreement",
                "description": "لورم",
                "checkboxLabel": "موافق هستم"
            }
        ],
        "feedback": {
            "id": "65a51417492de8ea53639092",
            "isPublic": false,
            "createdAt": "2024-01-15T11:16:39.951Z",
            "updatedAt": "2024-01-16T06:55:43.210Z",
            "isEditable": true,
            "values": {
                "65a2575fd6a685e68963de13": [
                    "test"
                ],
                "65a25760d6a685e68963de33": [
                    "test"
                ],
                "65a25760d6a685e68963de35": [
                    "test"
                ],
                "65a25760d6a685e68963de37": [
                    "test"
                ],
                "65a25760d6a685e68963de3c": [
                    "test"
                ],
                "65a25760d6a685e68963de43": [
                    "test"
                ],
                "65a25760d6a685e68963de48": [
                    "test"
                ],
                "65a25760d6a685e68963de4a": [
                    "test"
                ],
                "65a25760d6a685e68963de4c": [
                    "test"
                ],
                "65a25760d6a685e68963de4e": [
                    "test"
                ],
                "65a25777d6a685e68963de80": [
                    "2024-01-14T11:16:05.348Z"
                ],
                "65a25777d6a685e68963de88": [
                    "2024-01-15T11:16:07.464Z"
                ],
                "65a257a8d6a685e68963dea1": [
                    "test"
                ],
                "65a257a8d6a685e68963deac": [
                    "test"
                ],
                "65a257a8d6a685e68963deae": [
                    "test"
                ]
            },
            "title": "test"
        }
    }
]

////////////////////////////////////////////////////////////


// Task One
function formatFeedbacksForList(feedbacks) {
    const requiredFields = [
        "id",
        "label",
        "formId",
        "stepId",
        "sectionId",
        "sortIndex",
        "placeholder",
        "visibleAccordingTo",
        "isRequired",
        "isHidden",
        "isFullwidth",
        "type",
        "minLength",
        "maxLength",
    ]

    return feedbacks.map((feedback) => ({
        id: feedback.id,
        data: {
            id: feedback.id,
            label: feedback.label || "",
            formId: feedback.formId || "",
            stepId: feedback.stepId || "",
            sectionId: feedback.sectionId || "",
            sortIndex: feedback.sortIndex || 0,
            placeholder: feedback.placeholder || "",
            visibleAccordingTo: feedback.visibleAccordingTo || [],
            isRequired: feedback.isRequired || false,
            isHidden: feedback.isHidden || false,
            isFullwidth: feedback.isFullwidth || false,
            type: feedback.type || "",
            minLength: feedback.minLength || 0,
            maxLength: feedback.maxLength || 0,
        },
    })).sort((a, b) => a.data.sortIndex - b.data.sortIndex)
}

// Example usage for Task One
const formattedFeedbacksForList = formatFeedbacksForList(feedbacks)
console.log("Task One Result:")
console.log(formattedFeedbacksForList)

// Task Two
function getFeedbackById(id) {
    return feedbacks.find((feedback) => feedback.id === id)
}

function formatFeedback(feedback) {
    if (!feedback) {
        return null
    }

    const formattedInputs = feedback.inputs.map((input) => ({
        // Details related to each input
        id: input.id,
        label: input.label,
        formId: input.formId,
        stepId: input.stepId,
        sectionId: input.sectionId,
        sortIndex: input.sortIndex,
        placeholder: input.placeholder,
        visibleAccordingTo: input.visibleAccordingTo,
        isRequired: input.isRequired,
        isHidden: input.isHidden,
        isFullwidth: input.isFullwidth,
        type: input.type,
        minLength: input.minLength,
        maxLength: input.maxLength,
    }))

    return {
        id: feedback.id,
        data: {
            id: feedback.id,
            title: feedback.title,
            relatedMediaId: feedback.relatedMediaId,
            creator: feedback.creator,
            isPublic: feedback.isPublic,
            steps: feedback.steps,
            sections: feedback.sections,
            inputs: formattedInputs, // Using formatted input details
            feedback: {
                id: feedback.feedback.id,
                isPublic: feedback.feedback.isPublic,
                createdAt: feedback.feedback.createdAt,
                updatedAt: feedback.feedback.updatedAt,
                isEditable: feedback.feedback.isEditable,
                values: feedback.feedback.values,
                title: feedback.feedback.title,
            },
        },
    }
}

// Example usage for Task Two
const feedbackById = getFeedbackById("65a25608d6a685e68963ddc3") // Replace with desired ID
const formattedFeedback = formatFeedback(feedbackById)
console.log("Task Two Result:")
console.log(formattedFeedback)

// OPTIONAL Task Three
const filteredFeedbacks = feedbacks.filter((feedback) => {
    const value65a2575fd6a685e68963de13 = feedback.feedback.values["65a2575fd6a685e68963de13"]
    // Filtering feedbacks with "test" value in the "65a2575fd6a685e68963de13" field
    return value65a2575fd6a685e68963de13 && value65a2575fd6a685e68963de13.includes("test")
})

// Converting filtered feedbacks to an array of input details
const result = filteredFeedbacks.map((feedback) => {
    const inputId = "65a2575fd6a685e68963de13"
    const correspondingInput = feedback.inputs.find((input) => input.id === inputId)

    // If corresponding input is found, return its details
    if (correspondingInput) {
        return {
            [inputId]: feedback.feedback.values[inputId],
            ...correspondingInput,
        }
    }

    // If corresponding input is not found, return an empty array or perform your desired action
    return []
})
console.log("Task Three Result:")
console.log(result)
