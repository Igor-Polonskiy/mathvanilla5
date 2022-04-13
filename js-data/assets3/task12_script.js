(() => {
    const reloadTaskBtn = document.querySelector('.task12_reloadTask')
    const checkingTaskBtn = document.querySelector('.task12_checkingTask')
    const checkTask = document.querySelector('.task12_checkTask')
    const chek_answerTxt = document.querySelector('.task12_chek_answer')
    const input1 = document.querySelector('#task12_1')
    const input2 = document.querySelector('#task12_2')
    const input3 = document.querySelector('#task12_3')
    const input4 = document.querySelector('#task12_4')
    const input5 = document.querySelector('#task12_5')
    const input6 = document.querySelector('#task12_6')
    const input7 = document.querySelector('#task12_7')


    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0
    let answer5 = 0
    let answer6 = 0
    let answer7 = 0


    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })
    input4.addEventListener('change', (e) => {
        answer4 = e.target.value
    })
    input5.addEventListener('change', (e) => {
        answer5 = e.target.value
    })
    input6.addEventListener('change', (e) => {
        answer6 = e.target.value
    })
    input7.addEventListener('change', (e) => {
        answer7 = e.target.value
    })


    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
        input5.value = ''
        input6.value = ''
        input7.value = ''


        answer1 = 0
        answer2 = 0
        answer3 = 0
        answer4 = 0
        answer5 = 0
        answer6 = 0
        answer7 = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '3' &&
            answer2 === '1' &&
            answer3 === '5' &&
            answer4 === '6' &&
            answer5 === '4' &&
            answer6 === '7' &&
            answer7 === '2'
        ) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()