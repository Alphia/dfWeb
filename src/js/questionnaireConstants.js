const questions = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "isInXian",
                    "title": "当前是否在西安？",
                    "choices": [
                        {
                            "value": "true",
                            "text": "是"
                        },
                        {
                            "value": "false",
                            "text": "否"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "currentLocation",
                    "visibleIf": "{isInXian} = false",
                    "title": "当前在哪里？"
                },
                {
                    "type": "radiogroup",
                    "name": "hasLeft",
                    "title": "最近14天是否离开过所在城市？",
                    "choices": [
                        {
                            "value": "true",
                            "text": "是"
                        },
                        {
                            "value": "false",
                            "text": "否"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "leftFor",
                    "visibleIf": "{hasLeft} = true",
                    "title": "去过哪里?"
                },
                {
                    "type": "checkbox",
                    "name": "vehiclesInFortnight",
                    "title": "近14天出行所乘坐交通工具（多选）:",
                    "choices": [
                        "步行",
                        "自驾",
                        "公共交通",
                        "火车或飞机"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "outgoingTimeInFortnight",
                    "title": "近14天累计外出时长：",
                    "choices": [
                        "小于5小时",
                        "5-20小时",
                        "20-50小时",
                        "大于50小时"
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "outgoingSites",
                    "title": "外出场所（多选）：",
                    "choices": [
                        "超市商场",
                        "机场、车站",
                        "公园等室外",
                        "办公室",
                        "医院"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "touchedPersonSumInFortnight",
                    "title": "近14天近距离接触人数：",
                    "choices": [
                        "0-6人",
                        "6-20人",
                        "20-100人",
                        "大于100人"
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "hasTouchedVirus",
                    "title": "近14天是否接触过新冠确诊病人或疑似病人？",
                    "choices": [
                        {
                            "value": "true",
                            "text": "是"
                        },
                        {
                            "value": "false",
                            "text": "否"
                        }
                    ]
                },

                {
                    "type": "radiogroup",
                    "name": "isAnyNeighborInfected",
                    "title": "所在小区是否有人感染？",
                    "choices": [
                        {
                            "value": "true",
                            "text": "是"
                        },
                        {
                            "value": "false",
                            "text": "否"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "hasMasked",
                    "title": "出行是否佩戴口罩？",
                    "choices": [
                        {
                            "value": "true",
                            "text": "是"
                        },
                        {
                            "value": "false",
                            "text": "否"
                        }
                    ]
                },

                {
                    "type": "checkbox",
                    "name": "symptom",
                    "title": "当前健康状况（多选）：",
                    "choices": [
                        "无异常",
                        "发热",
                        "乏力",
                        "干咳",
                        "鼻塞",
                        "流涕",
                        "咽痛",
                        "腹泻"
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
