(() => {
    const pencils = document.querySelector('.task6_pencils')
    const pencilsImg = document.querySelectorAll('.task6_pencilImg')
    const circleWrapper = document.querySelector('.task6_circleWrapper')
    const baloons = document.querySelectorAll('.task6_baloon')
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')

    let color = '#fff'

    pencils.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_pencilImg')) {
            pencilsImg.forEach(item => {
                item.classList.remove('task6_pencilSelect')
            })
            e.target.classList.add('task6_pencilSelect')
            color = e.target.getAttribute('data-color')
        }
    })

    circleWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.task6_baloon')) {
            e.target.closest('.task6_baloon').setAttribute('fill', color)
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        pencilsImg.forEach(item => {
            item.classList.remove('task6_pencilSelect')
        })
        color = '#fff'
        baloons.forEach(item => {
            item.setAttribute('fill', color)
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        baloons.forEach(item => {


            if (item.classList.contains('task6_red')) {
                if (item.getAttribute('fill') === 'red') {
                    winVar++
                }
            }
            if (item.classList.contains('task6_yellow')) {
                if (item.getAttribute('fill') === 'yellow') {
                    winVar++
                }
            }
            if (item.classList.contains('task6_blue')) {
                if (item.getAttribute('fill') === 'blue') {
                    winVar++
                }
            }
            if (item.classList.contains('task6_white')) {
                if (item.getAttribute('fill') === '#fff' || item.getAttribute('fill') === '#FFFFFF') {
                    winVar++
                }
            }
        })

        if (winVar === 5) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()