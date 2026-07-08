import { addSafeEventListener } from "@js/shared";

export function bindSliderEvents({
    previousSlideButton,
    nextSlideButton,
    sliderController
}) {
 addSafeEventListener(previousSlideButton, "click", sliderController.showPreviousSlide, "Previous Slider Button");
 addSafeEventListener(nextSlideButton, "click", sliderController.showNextSlide, "Next Slider Button");
}