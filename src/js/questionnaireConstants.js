const questions = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "name",
                    "title": "姓名"
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "gender",
                    "title": "性别"
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "pid",
                    "title": "身份证号"
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "address",
                    "title": "住址"
                },

                {
                    "type": "text",
                    "isRequired": true,
                    "name": "contact",
                    "title": "联系方式"
                },
                {
                    "type": "checkbox",
                    "isRequired": true,
                    "name": "symptom",
                    "title": "您目前的不适症状有哪些(可多选)",
                    "choices": [
                        {"value": 0, "text": "发热"},
                        {"value": 1, "text": "咳嗽"},
                        {"value": 2, "text": "咳痰"},
                        {"value": 3, "text": "胸闷"},
                        {"value": 4, "text": "气短"},
                        {"value": 5, "text": "乏力"},
                        {"value": 6, "text": "鼻塞"},
                        {"value": 7, "text": "流涕"},
                        {"value": 8, "text": "咽痛"},
                        {"value": 9, "text": "头痛"},
                        {"value": 10, "text": "肌肉痛"},
                        {"value": 11, "text": "腹泻"},
                        {"value": 12, "text": "无"},
                        {"value": 13, "text": "其他"},
                    ]
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "bodyHeat",
                    "title": "您的当前体温"
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTraveledWuhan",
                    "title": "您发病前14天内是否有武汉市及周边地区，或其他有病例报告社区的旅行史或居住史?",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        },
                        {
                            "value": false,
                            "text": "否"
                        }
                    ]
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "wuhanSites",
                    "visibleIf": "{hasTraveledWuhan} = true",
                    "title": "那请填写具体旅行史或居住史:"
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTraveledOtherSites",
                    "title": "您发病前14天内是否有其他外出旅行史?",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        },
                        {
                            "value": false,
                            "text": "否"
                        }
                    ]
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "otherSites",
                    "visibleIf": "{hasTraveledOtherSites} = true",
                    "title": "请填写其它具体旅行史:"
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTouchedNCov",
                    "title": "您发病前 14 天内是否与新型冠状病毒感染者(核酸检测阳性者)有接触史?",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        },
                        {
                            "value": false,
                            "text": "否"
                        }
                    ]
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTouchedPotentialNCov",
                    "title": "您发病前 14 天内是否曾接触过来自武汉市及周边地区，或来自有病例报告社区的发热或有呼吸道症状的患者?",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        },
                        {
                            "value": false,
                            "text": "否"
                        }
                    ]
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "isNearToPotentialNCov",
                    "title": "您发病前 14 天内是否在小范围(如一个家庭、一个工地、一个单位、一个社区等)发 现 2 例及以上的发热、呼吸道症状患者?",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        },
                        {
                            "value": false,
                            "text": "否"
                        }
                    ]
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "Confirmation",
                    "title": " 承诺:我承诺以上情况属实，如恶意隐瞒信息，自愿承担相关法律责任(注:作出承诺后方可成功提交)。",
                    "choices": [
                        {
                            "value": true,
                            "text": "是"
                        }
                    ]
                },

                // {
                //     "type": "multipletext",
                //     "name": "question5",
                //     "title": "多文字",
                //     "items": [
                //         {
                //             "name": "text1"
                //         },
                //         {
                //             "name": "text2"
                //         }
                //     ]
                // }
            ]
        }
    ]
};
export {questions};
