(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const input1 = document.querySelector('#task9_1')
    const input2 = document.querySelector('#task9_2')
    const input3 = document.querySelector('#task9_3')
    const input4 = document.querySelector('#task9_4')
    const input5 = document.querySelector('#task9_5')
    const input6 = document.querySelector('#task9_6')
    const input7 = document.querySelector('#task9_7')
    const input8 = document.querySelector('#task9_8')
    const input9 = document.querySelector('#task9_9')
    const input10 = document.querySelector('#task9_10')
    const input11 = document.querySelector('#task9_11')
    const input12 = document.querySelector('#task9_12')
    const input13 = document.querySelector('#task9_13')
    const input14 = document.querySelector('#task9_14')
    const input15 = document.querySelector('#task9_15')
    const input16 = document.querySelector('#task9_16')
    const input17 = document.querySelector('#task9_17')
    const input18 = document.querySelector('#task9_18')

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
    let answer11 = 0
    let answer12 = 0
    let answer13 = 0
    let answer14 = 0
    let answer15 = 0
    let answer16 = 0
    let answer17 = 0
    let answer18 = 0

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
    input11.addEventListener('change', (e) => {
        answer11 = e.target.value
    })
    input12.addEventListener('change', (e) => {
        answer12 = e.target.value
    })
    input13.addEventListener('change', (e) => {
        answer13 = e.target.value
    })
    input15.addEventListener('change', (e) => {
        answer15 = e.target.value
    })
    input14.addEventListener('change', (e) => {
        answer14 = e.target.value
    })
    input16.addEventListener('change', (e) => {
        answer16 = e.target.value
    })
    input17.addEventListener('change', (e) => {
        answer17 = e.target.value
    })
    input18.addEventListener('change', (e) => {
        answer18 = e.target.value
    })

    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
        input5.value = ''
        input6.value = ''
        input7.value = ''
        input8.value = ''
        input9.value = ''
        input10.value = ''
        input11.value = ''
        input12.value = ''
        input13.value = ''
        input14.value = ''
        input15.value = ''
        input16.value = ''
        input17.value = ''
        input18.value = ''

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
        answer11 = 0
        answer12 = 0
        answer13 = 0
        answer14 = 0
        answer15 = 0
        answer16 = 0
        answer17 = 0
        answer18 = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '9' &&
            answer2 === '1' &&
            answer3 === '8' &&
            answer4 === '2' &&
            answer5 === '7' &&
            answer6 === '3' &&
            answer7 === '6' &&
            answer8 === '4' &&
            answer9 === '5' &&
            answer10 === '5' &&
            answer11 === '4' &&
            answer12 === '6' &&
            answer13 === '3' &&
            answer14 === '7' &&
            answer15 === '2' &&
            answer16 === '8' &&
            answer17 === '1' &&
            answer18 === '9') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()