import components from "./components.mjs";

let loadedDepth = 0;
const DEPTH_LIMIT = 1024;

export async function loadComponents() {
    loadedDepth++;
    if(loadedDepth > DEPTH_LIMIT) {
        throw 'loaded components depth is more than depth limit'
    }

    const asyncLoaders = []

    document.querySelectorAll('[vicomp-load]')
        .forEach(async node => {
            const component = node.getAttribute('vicomp-load');

            if(!(component in components)) {
                console.warn(`Cannot find component ${component} in components list`);
                return;
            }

            const loader = components[component]
            const loading = loader({node})

            if(loader.then) {
                asyncLoaders.push(loading)
            }

            node.innerHTML = await loading
        })
}

const figmaPositions = {
    1: 'justify-content:flex-start;align-items:flex-start;', //1
    2: 'justify-content:center;align-items: lex-start;',     //4
    3: 'justify-content:flex-end;align-items:flex-start;',   //7
    4: 'justify-content:flex-start;align-items:center;',     //2
    5: 'justify-content:center;align-items:center;',         //5
    6: 'justify-content:flex-end;align-items:center;',       //8
    7: 'justify-content:flex-start;align-items:flex-end;',   //3
    8: 'justify-content:center;align-items:flex-end;',       //6
    9: 'justify-content:flex-end;align-items:flex-end;',     //9
}

const columnTransition = {
    1: 1, 2: 4, 3: 7, 4: 2, 5: 5, 6: 8, 7: 3, 8: 6, 9: 9,
}

export function loadFigma() {
    document.querySelectorAll('[figma]')
        .forEach(node => {
            const figmaString = node.getAttribute('figma');

            let [ dir, gap, paddingX, paddingY, position ] = figmaString.split(' ')

            let cssString = 'display:flex;'

            if (dir == 'vert') {
                position = columnTransition[position]
                cssString += 'flex-direction:column;'
            }

            cssString += figmaPositions[position]

            if(gap == 'auto') {
                cssString += 'justify-content:space-between;'
                console.log('justify-content:space-between;');
            }
            else {
                cssString += `gap:${gap}px;`
            }

            cssString += `padding:${paddingY}px ${paddingX}px;`

            node.style.cssText = node.style.cssText || '' + cssString
        })
}

export function loadRepeats() {
    document.querySelectorAll('[virepeat]')
        .forEach(node => {
            let count = node.getAttribute('virepeat');
            while(--count > 0) node.insertAdjacentHTML('afterend', node.outerHTML)
        })
}