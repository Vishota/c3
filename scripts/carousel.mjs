let carouselPosition = 5

const innerCarousel = document.querySelector('.teachers-carousel-inner')
const prev = document.querySelector('#carousel-prev')
const next = document.querySelector('#carousel-next')

export function activateCarousel() {
    if(!innerCarousel) return
    recheckCarouselBar()
    window.addEventListener('resize', () => {
        recheckCarouselBar()
    })

    innerCarousel.innerHTML+=innerCarousel.innerHTML+innerCarousel.innerHTML

    next.addEventListener('click', e => {
            e.target.setAttribute('style', 'transform:scale(.6)')
            setTimeout(() => {
                e.target.setAttribute('style', '')
            }, 200)
            moveCarousel(1)
        })
        
    prev.addEventListener('click', e => {
            e.target.setAttribute('style', 'transform:scale(.6)')
            setTimeout(() => {
                e.target.setAttribute('style', '')
            }, 200)
            moveCarousel(-1)
        })
}

const carouselBarParts = [
    document.querySelector('.carousel-bar > *:nth-child(2)'),
    document.querySelector('.carousel-bar > *:nth-child(3)'),
    document.querySelector('.carousel-bar > *:nth-child(4)'),
    document.querySelector('.carousel-bar > *:nth-child(5)'),
    document.querySelector('.carousel-bar > *:nth-child(6)'),
]

function recheckCarouselBar() {
    const capacity = getComputedStyle(document.body).getPropertyValue('--carousel-capacity');
    carouselBarParts.forEach(node => node.setAttribute('src', 'imgs/carousel-inactive.svg'))
    for (let i = 0; i < capacity; i++) {
        carouselBarParts[(carouselPosition + i) % carouselBarParts.length]
            .setAttribute('src', 'imgs/carousel-active.svg')
    }
}
function moveCarousel(n) {
    carouselPosition = (carouselPosition + n + carouselBarParts.length) % carouselBarParts.length
    innerCarousel.setAttribute('style', `transform: translateX(
        calc( (var(--carousel-el-width) + 20px) * ${0 - carouselPosition})
    );`)
    
    recheckCarouselBar()
}