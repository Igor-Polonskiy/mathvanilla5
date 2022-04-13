(() => {
    const audio = document.querySelectorAll('.task8_audio')
    const task8_prev = document.querySelector('.task8_prev')
    const task8_next = document.querySelector('.task8_next')
    const task8_slide = document.querySelector('.task8_img')
    const slide_caption = document.querySelector('.task8_slide_caption')
    const numberOfimgs = document.querySelector('.task8_count2')
    const count = document.querySelector('.task8_count1')
    const task8_begin = document.querySelector('.task8_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_5/assets5/task8_1.png',
            text: 'Посмотри на числовой луч. За каким число следует число 10?'
        },
        {
            id: 2,
            src: 'Images_5/assets5/task8_2.png',
            text: 'Верно. Число 10 следует за числом 9. Что необычного в записи этого числа?'
        },
        {
            id: 3,
            src: 'Images_5/assets5/task8_3.png',
            text: `Число 10 двузначное. Для его записи нужны две цифры: 1 и 0.`
        },
        {
            id: 4,
            src: 'Images_5/assets5/task8_4.png',
            text: 'Сколько нужно прибавить к 9, чтобы получить 10?'
        },
        {
            id: 5,
            src: 'Images_5/assets5/task8_5.png',
            text: 'Чтобы получить 10, к 9 нужно прибавить 1.'
        },
        {
            id: 6,
            src: 'Images_5/assets5/task8_6.png',
            text: 'На сколько 10 больше 9? На сколько 9 меньше 10?'
        },
        {
            id: 7,
            src: 'Images_5/assets5/task8_7.png',
            text: '10 больше 9 на 1. 9 меньше 10 на 1.'
        }
    ]

    task8_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task8_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task8_begin.style.display = 'none'
        } else if (e.target.classList.contains('task8_start2')) {
            task8_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task8_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task8_slide.append(element)

    task8_prev.addEventListener('click', () => {
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
            task8_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task8_prev.style.opacity = 0
        }


    })

    task8_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task8_prev.style.opacity = 1
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
            task8_next.style.opacity = 0
        }

    })
})()