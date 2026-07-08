import { DOM } from "@js/shared";

import { createSliderController } from "./controller.js";
import { bindSliderEvents } from "./events.js";

export function initializeSlider(){
    const sliderController = createSliderController({
        sourceElement: DOM.sliderSource,
        imageElement: DOM.sliderImage,
        titleElement: DOM.sliderTitle,
        descriptionElement: DOM.sliderDescription,
    });

    bindSliderEvents({
        previousSlideButton: DOM.previousSlideButton,
        nextSlideButton: DOM.nextSlideButton,
        sliderController,
    });
}