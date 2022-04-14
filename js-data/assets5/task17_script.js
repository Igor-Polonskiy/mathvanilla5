(() => {
    const reloadTaskBtn = document.querySelector('.task17_reloadTask')
    const checkingTaskBtn = document.querySelector('.task17_checkingTask')
    const checkTask = document.querySelector('.task17_checkTask')
    const chek_answerTxt = document.querySelector('.task17_chek_answer')
    const task = document.querySelector('.task17_wrapper')
    const inputs = task.querySelectorAll('input')


    let answer = []
    let winVar = ['8', '5', '9', '3', '7', '4', '6', '1', '9', '1', '4', '6']

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
        if (win === 12) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()