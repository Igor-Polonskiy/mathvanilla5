(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const imgsWrapper = document.querySelector('.task5_imgwrapper')

    let pictures = [{
            id: 1,
            src: '2 + 2',
            data: true
        },
        {
            id: 2,
            src: '3 + 1',
            data: true
        },
        {
            id: 3,
            src: '3 + 3',
            data: false
        },
        {
            id: 4,
            src: '1 + 4',
            data: false
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

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()