const questions = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "isRequired": true,
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
                    "isRequired": true,
                    "name": "currentLocation",
                    "visibleIf": "{isInXian} = false",
                    "title": "当前在哪里？"
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
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
                    "isRequired": true,
                    "name": "leftFor",
                    "visibleIf": "{hasLeft} = true",
                    "title": "去过哪里?"
                },
                {
                    "type": "checkbox",
                    "isRequired": true,
                    "name": "vehiclesInFortnight",
                    "title": "近14天出行所乘坐交通工具（多选）:",
                    "choices": [
                        {"value": "0", "text": "步行"},
                        {"value": "1", "text": "自驾"},
                        {"value": "2", "text": "公共交通"},
                        {"value": "3", "text": "火车或飞机"},
                    ]
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "outgoingTimeInFortnight",
                    "title": "近14天累计外出时长：",
                    "choices": [
                        {"value": "0", "text": "小于5小时"},
                        {"value": "1", "text": "6-20小时"},
                        {"value": "2", "text": "21-50小时"},
                        {"value": "3", "text": "大于50小时"}
                    ]
                },
                {
                    "type": "checkbox",
                    "isRequired": true,
                    "name": "outgoingSites",
                    "title": "外出场所（多选）：",
                    "choices": [
                        {"value": "0", "text": "超市商场"},
                        {"value": "1", "text": "机场、车站"},
                        {"value": "2", "text": "公园等室外"},
                        {"value": "3", "text": "办公室"},
                        {"value": "4", "text": "医院"},
                    ]
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
                    "name": "touchedPersonSumInFortnight",
                    "title": "近14天近距离接触人数：",
                    "choices": [
                        {"value": "0", "text": "0-5人"},
                        {"value": "1", "text": "6-20人"},
                        {"value": "2", "text": "21-100人"},
                        {"value": "3", "text": "大于100人"},
                    ]
                },
                {
                    "type": "radiogroup",
                    "isRequired": true,
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
                    "isRequired": true,
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
                    "isRequired": true,
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
                    "isRequired": true,
                    "name": "symptom",
                    "title": "当前健康状况（多选）：",
                    "choices": [
                        {"value": "0", "text": "无异常"},
                        {"value": "1", "text": "发热"},
                        {"value": "2", "text": "乏力"},
                        {"value": "3", "text": "干咳"},
                        {"value": "4", "text": "鼻塞"},
                        {"value": "5", "text": "流涕"},
                        {"value": "6", "text": "咽痛"},
                        {"value": "7", "text": "腹泻"},
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
