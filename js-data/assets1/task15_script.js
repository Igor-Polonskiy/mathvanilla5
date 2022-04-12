(() => {
    const reloadTaskBtn = document.querySelector('.task15_reloadTask')
    const checkingTaskBtn = document.querySelector('.task15_checkingTask')
    const checkTask = document.querySelector('.task15_checkTask')
    const chek_answerTxt = document.querySelector('.task15_chek_answer')
    const input1 = document.querySelector('#task15_1')
    const input2 = document.querySelector('#task15_2')
    const input3 = document.querySelector('#task15_3')




    const play1 = document.querySelector('.task15_play1')
    const play2 = document.querySelector('.task15_play2')
    const play3 = document.querySelector('.task15_play3')


    const audio = document.querySelectorAll('.task15_audio')




    let answer1 = 0
    let answer2 = 0
    let answer3 = 0





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
        answer2 = e.target.value.toUpperCase()
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value.toUpperCase()
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
        if (answer1 === '6' &&
            answer2 === 'СТРУЧОК' &&
            answer3 === 'ГРАД') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()