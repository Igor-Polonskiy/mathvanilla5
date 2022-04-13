(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const imgsWrapper = document.querySelector('.task5_imgwrapper')

    let pictures = [{
            id: 1,
            src: '8 > 6',
            data: true
        },
        {
            id: 2,
            src: '9 < 6',
            data: false
        },
        {
            id: 3,
            src: '9 < 8',
            data: false
        },
        {
            id: 4,
            src: '5 > 7',
            data: false
        },
        {
            id: 5,
            src: '6 > 4',
            data: true
        },
        {
            id: 6,
            src: '8 > 5',
            data: true
        },
        {
            id: 7,
            src: '9 > 8',
            data: true
        },
        {
            id: 8,
            src: '4 < 6',
            data: true
        },
        {
            id: 9,
            src: '5 < 8',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task5_img')
            answer.innerText = item.src
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task5_img')) {
            e.target.classList.toggle('task5_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task5_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'true') {
                winVar++
            } else winVar--
        })

        if (winVar === 6) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()