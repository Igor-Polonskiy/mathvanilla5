(() => {
    const reloadTaskBtn = document.querySelector('.task19_reloadTask')
    const checkingTaskBtn = document.querySelector('.task19_checkingTask')
    const checkTask = document.querySelector('.task19_checkTask')
    const chek_answerTxt = document.querySelector('.task19_chek_answer')
    const input1 = document.querySelector('#task19_select_1')
    const input2 = document.querySelector('#task19_select_2')
    const input3 = document.querySelector('#task19_select_3')
    const input4 = document.querySelector('#task19_select_4')
    const input5 = document.querySelector('#task19_select_5')
    const input6 = document.querySelector('#task19_select_6')
    const input7 = document.querySelector('#task19_select_7')
    const input8 = document.querySelector('#task19_select_8')
    const input9 = document.querySelector('#task19_select_9')
    const input10 = document.querySelector('#task19_select_10')

    const play1 = document.querySelector('.task19_play1')
    const audio = document.querySelectorAll('.task19_audio')

    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0
    let answer5 = 0
    let answer6 = 0
    let answer7 = 0
    let answer8 = 0
    let answer9 = 0
    let answer10 = 0


    play1.addEventListener('click', () => {
        audio[0].play()
    })

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
    input8.addEventListener('change', (e) => {
        answer8 = e.target.value
    })
    input9.addEventListener('change', (e) => {
        answer9 = e.target.value
    })
    input10.addEventListener('change', (e) => {
        answer10 = e.target.value
    })



    reloadTaskBtn.addEventListener('click', () => {
        input1.value = 0
        input2.value = 0
        input3.value = 0
        input4.value = 0
        input5.value = 0
        input6.value = 0
        input7.value = 0
        input8.value = 0
        input9.value = 0
        input10.value = 0

        answer1 = 0
        answer2 = 0
        answer3 = 0
        answer4 = 0
        answer5 = 0
        answer6 = 0
        answer7 = 0
        answer8 = 0
        answer9 = 0
        answer10 = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '1' &&
            answer2 === '2' &&
            answer3 === '2' &&
            answer4 === '2' &&
            answer5 === '1' &&
            answer6 === '2' &&
            answer7 === '1' &&
            answer8 === '2' &&
            answer9 === '2' &&
            answer10 === '2') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()