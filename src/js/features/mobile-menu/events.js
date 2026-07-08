import { onDesktopChange, addSafeEventListener } from "@js/shared";

export function bindMenuEvents({
    menuController,
    menuButton,
    closeButton,
    menu,
}) {
    addSafeEventListener(menuButton, "click", menuController.openMenu, "Menu Button");
    
    addSafeEventListener(closeButton, "click", menuController.closeMenu, "Close Button");

    addSafeEventListener(menu, "cancel", (event) => {
        event.preventDefault();
        menuController.closeMenu();
    }, "Mobile Menu",);

    onDesktopChange((event) => {
        if (event.matches) {
            menuController.closeMenu();
        }
    });
}