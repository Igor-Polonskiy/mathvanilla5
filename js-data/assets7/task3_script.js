(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const task = document.querySelector('.task3_wrapper')
    const inputs = task.querySelectorAll('input')
    const play1 = document.querySelector('.task3_play1')

    const audio = document.querySelectorAll('.task3_audio')

    let answer = []
    let winVar = ['10', '4', '5']


    play1.addEventListener('click', () => {
        audio[0].play()
    })

    inputs.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            answer[index] = e.target.value
        })
    })

    reloadTaskBtn.addEventListener('click', () => {
        inputs.forEach(item => {
            item.value = ''
        })

        answer.length = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let win = 0
        winVar.forEach((item, index) => {
            if (item === answer[index]) {
                win++
            }
        })
        if (win === winVar.length) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()