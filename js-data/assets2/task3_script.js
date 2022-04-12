(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const task = document.querySelector('.task3_answer')
    const questions = document.querySelectorAll('.task3_span')

    task.addEventListener('click', (e) => {
        if (e.target.classList.contains('task3_span')) {
            e.target.classList.toggle('task3_line')
        }
    })



    reloadTaskBtn.addEventListener('click', () => {
        questions.forEach(item => {
            item.classList.remove('task3_line')
        })
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0
        let answers = document.querySelectorAll('.task3_line')
        answers.forEach(item => {
            if (item.getAttribute('data-number') === '2') {
                winVar++
            } else winVar--
        })
        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()