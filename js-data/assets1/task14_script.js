(() => {
    const reloadTaskBtn = document.querySelector('.task14_reloadTask')
    const checkingTaskBtn = document.querySelector('.task14_checkingTask')
    const checkTask = document.querySelector('.task14_checkTask')
    const chek_answerTxt = document.querySelector('.task14_chek_answer')
    const input1 = document.querySelector('#task14_1')
    const input2 = document.querySelector('#task14_2')
    const input3 = document.querySelector('#task14_3')
    const input4 = document.querySelector('#task14_4')



    const play1 = document.querySelector('.task14_play1')
    const play2 = document.querySelector('.task14_play2')
    const play3 = document.querySelector('.task14_play3')


    const audio = document.querySelectorAll('.task14_audio')




    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0




    play1.addEventListener('click', () => {
        audio[0].play()
    })
    play2.addEventListener('click', () => {
        audio[1].play()
    })
    play3.addEventListener('click', () => {
        audio[2].play()
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
        if (answer1 === '6' &&
            answer2 === '6' &&
            answer3 === '6' &&
            answer4 === '4') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()