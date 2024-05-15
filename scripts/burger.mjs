import { initTheme } from "./theme.mjs"

export function initBurger() {
    document.querySelector('#burger')
        .addEventListener('click', () => {
            const instance = document.querySelector('.burger-menu')
            
            if(instance) {
                instance.style.cssText += 'opacity: 0;'
                setTimeout(() => {
                    instance.remove()
                }, 200)
                return;
            }

            document.body.insertAdjacentHTML('beforeend', `
                <div class='burger-menu' style="opacity: 0">
                    <li class="hor-menu__el" onclick="window.location.replace('courses.html')">Курсы</li>
                    <li class="hor-menu__el" onclick="window.location.replace('/c3/')">Курсы</li>
                    <a href="user.html"><button class="button-secondary">vishota</button></a>
                    <label id="switch" class="switch">
                        <input type="checkbox" id="theme-slider">
                        <span class="slider round"></span>
                    </label>
                </div>
            `)
            initTheme()
            setTimeout(()=>document.querySelector('.burger-menu').style.cssText = '')
        })
}