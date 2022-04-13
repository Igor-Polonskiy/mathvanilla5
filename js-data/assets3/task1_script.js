(() => {
    const reloadTaskBtn = document.querySelector('.task1_reloadTask')
    const checkingTaskBtn = document.querySelector('.task1_checkingTask')
    const checkTask = document.querySelector('.task1_checkTask')
    const chek_answerTxt = document.querySelector('.task1_chek_answer')
    const input1 = document.querySelector('#task1_1')
    const input2 = document.querySelector('#task1_2')
    const input3 = document.querySelector('#task1_3')
    const input4 = document.querySelector('#task1_4')



    const play1 = document.querySelector('.task1_play1')


    const audio = document.querySelectorAll('.task1_audio')




    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0




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





    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''


        answer1 = 0
        answer2 = 0
        answer3 = 0
        answer4 = 0


        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '7' &&
            answer2 === '2' &&
            answer3 === '6' &&
            answer4 === '6') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()