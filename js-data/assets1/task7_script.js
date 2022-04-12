(() => {
    const audio = document.querySelectorAll('.task7_audio')
    const task7_prev = document.querySelector('.task7_prev')
    const task7_next = document.querySelector('.task7_next')
    const task7_slide = document.querySelector('.task7_img')
    const slide_caption = document.querySelector('.task7_slide_caption')
    const numberOfimgs = document.querySelector('.task7_count2')
    const count = document.querySelector('.task7_count1')
    const task7_begin = document.querySelector('.task7_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_5/assets1/task7_1.png',
            text: 'Посмотри на числовой луч. Можем ли мы его продолжить? Какое число будет стоять после числа 5?'
        },
        {
            id: 2,
            src: 'Images_5/assets1/task7_2.png',
            text: 'Верно. Это число 6.Сколько шагов надо сделать по числовую лучу, чтобы получить число 6?'
        },
        {
            id: 3,
            src: 'Images_5/assets1/task7_3.png',
            text: `Верно. Один шаг.`
        },
        {
            id: 4,
            src: 'Images_5/assets1/task7_4.png',
            text: 'На сколько 6 больше 5? На сколько 5 меньше 6?'
        },
        {
            id: 5,
            src: 'Images_5/assets1/task7_5.png',
            text: 'Верно. 6 больше 5 на 1. 5 меньше 6 на 1.'
        }
    ]

    task7_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task7_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task7_begin.style.display = 'none'
        } else if (e.target.classList.contains('task7_start2')) {
            task7_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task7_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task7_slide.append(element)

    task7_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task7_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task7_prev.style.opacity = 0
        }


    })

    task7_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task7_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task7_next.style.opacity = 0
        }

    })
})()