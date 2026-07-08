import { REQUIRED_ELEMENTS } from '@js/shared/constants.js';

const SELECTORS = {
    // Mobile menu
    mobileNavButton: '#menu-button',
    mobileCloseButton: '.menu-button--close',
    mobileNav: '#mobile-menu',
    mobileNavContent: '.site-dialog__content',
    mobileNavLinks: '.site-nav--mobile .site-nav__link',
}

function isCollection(value){
    return (value instanceof NodeList || value instanceof HTMLCollection);
}

function isValidElement(value){
    if ( value instanceof Element){
        return true;
    }

    if (isCollection(value)){
        return value.length > 0;
    }

    return false;
}

/**
 * Returns the first element of a collection.
 * Returns null when the collection is empty.
 */
export function getFirstElement(collection){
    if (!isCollection(collection)){
        throw new Error(`[DOM] getFirstElement expects a NodeList or HTMLCollection`);
    }

    return collection[0] ?? null;
}

export function addSafeEventListener(element, event, handler, context = "unknown") {
    if (!isValidElement(element)){
        throw new Error(`[${context}] Invalid element passed to addSafeEventListener: ${element}`);
    }

    if (isCollection(element)){
        Array.from(element).forEach( el => el.addEventListener(event, handler));
        return;
    }

    element.addEventListener(event, handler);
}

function initDOMElements(){
    const DOM = {
        mobileNavButton: document.querySelector(SELECTORS.mobileNavButton),
        mobileCloseButton: document.querySelector(SELECTORS.mobileCloseButton),
        mobileNav: document.querySelector(SELECTORS.mobileNav),
        mobileNavContent: document.querySelector(SELECTORS.mobileNavContent),
        mobileNavLinks: document.querySelectorAll(SELECTORS.mobileNavLinks),
    };

    Object.entries(DOM).forEach(([key, element]) => {
        const isRequired = REQUIRED_ELEMENTS.includes(key);

        if( isRequired && !isValidElement(element)) {
            throw new Error(`Required DOM element "${key}" (${SELECTORS[key]}) was not found`);
        }
    });

    return Object.freeze(DOM);
}

export const DOM = initDOMElements();