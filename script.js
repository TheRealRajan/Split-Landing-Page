const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//Add hover-left class on hover over div and remove class when mouse leaves div area
left.addEventListener('mouseenter', () =>
    container.classList.add('hover-left')
)

left.addEventListener('mouseleave', () =>
    container.classList.remove('hover-left')
)


//Add hover-right class on hover over div and remove class when mouse leaves div area
right.addEventListener('mouseenter', () =>
    container.classList.add('hover-right')
)

right.addEventListener('mouseleave', () =>
    container.classList.remove('hover-right')
) 