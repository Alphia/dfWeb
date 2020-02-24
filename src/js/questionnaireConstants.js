const questions = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "visitor",
                    "title": "您的身份是？",
                    "choices": [
                        '门诊患者本人',
                        '门诊患者家属/陪人',
                        '住院患者本人',
                        '住院患者家属/陪人',
                    ]
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "p_name",
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
                    "choices": ["否"],
                    "hasOther": true,
                    "otherPlaceHolder": "请填写具体旅行史或居住史",
                    "otherText": "是"
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTraveledOtherSites",
                    "title": "您发病前14天内是否有其他外出旅行史?",
                    "choices": ["否"],
                    "hasOther": true,
                    "otherPlaceHolder": "请填写其他具体旅行史",
                    "otherText": "是"
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTouchedNCov",
                    "title": "您发病前 14 天内是否与新型冠状病毒感染者(核酸检测阳性者)有接触史?",
                    "choices": ["是", "否"]
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "hasTouchedPotentialNCov",
                    "title": "您发病前 14 天内是否曾接触过来自武汉市及周边地区，或来自有病例报告社区的发热或有呼吸道症状的患者?",
                    "choices": ["是", "否"]
                },

                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "isNearToPotentialNCov",
                    "title": "您发病前 14 天内是否在小范围(如一个家庭、一个工地、一个单位、一个社区等)发 现 2 例及以上的发热、呼吸道症状患者?",
                    "choices": ["是", "否"]
                },
                {
                    "type": "checkbox",
                    "isRequired": true,
                    "name": "symptom",
                    "title": "您目前的不适症状有哪些(可多选)",
                    "choices": [
                        "发热",
                        "咳嗽",
                        "咳痰",
                        "胸闷",
                        "气短",
                        "乏力",
                        "鼻塞",
                        "流涕",
                        "咽痛",
                        "头痛",
                        "肌痛",
                        "腹泻",
                        "呼吸困难",
                        "无"
                    ],
                    "hasOther": true,
                    "otherPlaceHolder": "请填写其他症状",
                    "otherText": "其他"
                },
                {
                    "type": "checkbox",
                    "isRequired": true,
                    "visibleIf": "{visitor} = '住院患者本人'",
                    "name": "otherSymptom",
                    "title": "您平时有什么基础疾病（可多选）？",
                    "choices": [
                        "慢性呼吸系统疾病",
                        "高血压",
                        "糖尿病",
                        "冠心病",
                        "脑血管病",
                        "慢性肝病",
                        "慢性肾病",
                        "肿瘤病史",
                        "血液系统疾病",
                        "无"
                    ],
                    "hasOther": true,
                    "otherPlaceHolder": "请填写其他症状",
                    "otherText": "其他"
                },
                {
                    "type": "text",
                    "isRequired": true,
                    "name": "drugsInFortnight",
                    "visibleIf": "{visitor} = '住院患者本人'",
                    "title": "近14天用药史:"
                },
            ]
        }
    ]
};
export {questions};
