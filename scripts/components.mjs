export default {
    directions: () => ['Программирование', 'Дизайн', 'Маркетинг', 'Тестирование', 'Психология', 'Английский язык', 'Бизнес-анализ']
        .map(t => `<button class="button-direction" onclick="window.location.replace('/courses.html')">${t}</button>`)
        .join('')
        .repeat(3),

    stats: () => [[70 ,'преподавателей'], [229 ,'курсов'], [421 ,'обучающихся'], [1489 ,'выпускников']]
        .map(([number, text]) => `<div class="stat-con"><div class="stat-number">${number}</div><div class="">${text}</div></div>`)
        .join(''),
    
    teachers: () => [['Роман Гослин', 'Преподает курсы по веб-разработке. Более 60 лет опыта в программировании на JavaScript'], ['Петр Бетвин', 'Учит дизайну от визиток и логотипов до веб-сайтов и мобильных приложений'], ['Виталий Белов', 'Ведет курсы по химии. Подготовит к выпускным экзаменам, ЕГЭ, ОГЭ'], ['Тимофей Дердов', 'Ведет курсы по бизнесу и предпринимательству'], ['Млад Вишота', 'Делает курсач в последний день']]
        .map(([name, description], i) => `<div class="teacher-card"><div class="teacher-wrapper"><div class="teacher-pic-con"><img alt="${name}" src="imgs/teacher-${i+1}.png" class="teacher-pic"></div><h1 class="h1 text-styled">${name}</h1><p>${description}</p></div></div>`)
        .join(''),

    materials: () => '<h2 class="subtitle">Материалы курса</h2>' +
        (['Урок 1. Основы Node.js','Задание 1.1. Установка npm и node.js','Задание 1.2. Основы JavaScript','Задание 1.3. Асинхронное программирование','Урок 2. Express.js','Доп. материал: про протокол HTTP','Задание 2.1. Установка Express.js и запуск простого сервера','Задание 2.2. Express.js middleware']
        .map(name => `<div onclick="window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')" figma="hor auto 10 10 5" class="fullwidth material-bar"><h3 class="regular-weight">${name}</h3><img src="imgs/go.svg" alt="Go"></div>`)
        .join(''))
}