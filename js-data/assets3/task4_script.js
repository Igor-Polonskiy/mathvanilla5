(() => {
    const audio = document.querySelectorAll('.task4_audio')
    const task4_prev = document.querySelector('.task4_prev')
    const task4_next = document.querySelector('.task4_next')
    const task4_slide = document.querySelector('.task4_img')
    const slide_caption = document.querySelector('.task4_slide_caption')
    const numberOfimgs = document.querySelector('.task4_count2')
    const count = document.querySelector('.task4_count1')
    const task4_begin = document.querySelector('.task4_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_5/assets3/task4_1.png',
            text: 'Посмотри на числовой луч. Можем ли мы его продолжить? Какое число будет стоять после числа 7?'
        },
        {
            id: 2,
            src: 'Images_5/assets3/task4_2.png',
            text: 'Верно. Это число 8. Сколько шагов надо сделать по числовому лучу от точки 7, чтобы получить число 8?'
        },
        {
            id: 3,
            src: 'Images_5/assets3/task4_3.png',
            text: `Верно. Один шаг.`
        },
        {
            id: 4,
            src: 'Images_5/assets3/task4_4.png',
            text: 'На сколько 8 больше 7? На сколько 7 меньше 8?'
        },
        {
            id: 5,
            src: 'Images_5/assets3/task4_5.png',
            text: 'Верно. 8 больше 7 на 1. 7 меньше 8 на 1.'
        }
    ]

    task4_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task4_begin.style.display = 'none'
        } else if (e.target.classList.contains('task4_start2')) {
            task4_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task4_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task4_slide.append(element)

    task4_prev.addEventListener('click', () => {
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
            task4_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task4_prev.style.opacity = 0
        }


    })

    task4_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task4_prev.style.opacity = 1
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
            task4_next.style.opacity = 0
        }

    })
})()