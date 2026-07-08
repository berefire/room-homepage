import { DOM, getFirstElement } from "@js/shared";

import { createMenuController } from "./controller.js";
import { bindMenuEvents } from "./events.js";

export function initializeMenu() {
    const menuController = createMenuController({
        menu: DOM.mobileNav,
        menuContent: DOM.mobileNavContent,
        menuButton: DOM.mobileNavButton,
        firstLink: getFirstElement(DOM.mobileNavLinks),
    });

    bindMenuEvents({
        menuController,
        menuButton: DOM.mobileNavButton,
        closeButton: DOM.mobileCloseButton,
        menu: DOM.mobileNav,
    });
}