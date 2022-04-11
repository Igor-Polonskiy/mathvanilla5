(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const input1 = document.querySelector('#task1_1')
    const input2 = document.querySelector('#task1_2')
    const input3 = document.querySelector('#task1_3')






    let answer1 = 0
    let answer2 = 0
    let answer3 = 0




    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })





    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''



        answer1 = 0
        answer2 = 0
        answer3 = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '4' &&
            answer2 === '5' &&
            answer3 === '3') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()