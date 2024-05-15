export function initScroll() {
    document.querySelector('#learn-more')?.addEventListener('click', () => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }));
}