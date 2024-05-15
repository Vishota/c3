let currentTheme = localStorage.getItem('theme') || 'light'

export function initTheme() {
    document.body.parentElement.setAttribute('class', currentTheme)

    document.querySelectorAll('#theme-slider:not([initialized])')
        .forEach(node => {
            node.setAttribute('initialized', '1')
            console.log(currentTheme);
            if(currentTheme == 'light') {
                node.checked = true
            }
            
            node.removeAttribute('checked')
            node.addEventListener('change', e => {
                currentTheme = currentTheme == 'light' ? 'dark' : 'light'
                localStorage.setItem('theme', currentTheme)
                document.body.parentElement.setAttribute('class', currentTheme)

                document.querySelectorAll('#theme-slider')
                    .forEach(n => n.checked = currentTheme == 'light')
            })
    })
}

const themes = {
    'light': '--pale: #eee;--bg: #fff;--text: #000;--text-pale: #555;--accent-1: #954FEE;--accent-2: #54D277;--text-accent-1: #fff;--text-accent-2: #fff;--text-additional: #fff;--additional: #53BADB;',
    'dark': '--pale: #333;--bg: #111;--text: #fff;--text-pale: #ddd;--accent-1: #954FEE;--accent-2: #54D277;--text-accent-1: #fff;--text-accent-2: #fff;--text-additional: #fff;--additional: #53BADB;'
}