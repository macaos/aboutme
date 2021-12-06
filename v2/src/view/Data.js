class Data {
    get playgroundInfo() {
        return [
            {
                name: 'Skeletion UI Framework',
                link: '',
            },
            {
                name: '영어 쓰기 훈련',
                link: '',
            }
        ]
    }
    get careerInfo() {
        return [
            {
                name: 'Samsung Fire',
                part: 'UI Dept.',
                position: 'Lead Professional',
                period: '2018 - NOW',
                tags: ['nodejs', 'react', 'typescript', 'javascript']
            },
            {
                name: 'kobaltlab',
                part: 'UX Dept.',
                position: 'co-founder',
                period: '2012 - 2017',
                tags: ['Actionscript', 'Swift', 'Javascript', 'javascript']
            }
            ,
            {
                name: 'mrstory',
                part: '',
                position: 'founder',
                period: '2011 - 2011',
                tags: ['PHP', 'Objective C']
            }
            ,
            {
                name: 'kobalt60',
                part: 'UX Dept.',
                position: 'Team Leader',
                period: '2007 - 2010',
                tags: ['Actionscript', 'AfterEffect', 'MotionGraphic']
            }
        ]
    }

    get skills() {
        return [
            {
                name: 'Now',
                tags: ['Javascript', 'Typescript', 'React']
            },
            {
                name: 'Used',
                tags: ['React Native', 'vue', 'Swift', 'PHP']
            },
            {
                name: 'Other experiences',
                tags: ['AfterEffect', 'Flash', 'SilverLight', 'MotionGraphic']
            }
        ]
    }
}

export default new Data();