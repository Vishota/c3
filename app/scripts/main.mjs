import { initBurger } from "./burger.mjs";
import { activateCarousel } from "./carousel.mjs";
import { loadComponents, loadFigma, loadRepeats } from "./component.mjs";
import { initTheme } from "./theme.mjs";

loadComponents().then(() => {
    loadFigma()
    loadRepeats()
    activateCarousel()
    initBurger()
    initTheme()
})