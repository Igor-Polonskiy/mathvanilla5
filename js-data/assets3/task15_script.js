(() => {
    const reloadTaskBtn = document.querySelector('.task15_reloadTask')
    const checkingTaskBtn = document.querySelector('.task15_checkingTask')
    const checkTask = document.querySelector('.task15_checkTask')
    const chek_answerTxt = document.querySelector('.task15_chek_answer')
    const inputElephant = document.querySelector('#task15_1')


    let answer1 = 0



    inputElephant.addEventListener('change', (e) => {
        answer1 = e.target.value
    })



    reloadTaskBtn.addEventListener('click', () => {
        inputElephant.value = ''
        answer1 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '6') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()