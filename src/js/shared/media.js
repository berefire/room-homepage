import { BREAKPOINTS } from './constants.js';

const desktopMediaQuery = window.matchMedia(`(min-width: ${BREAKPOINTS.desktop})`);

export function isDesktop() {
    return desktopMediaQuery.matches;
}

export function onDesktopChange(callback){
    desktopMediaQuery.addEventListener("change", callback);
}