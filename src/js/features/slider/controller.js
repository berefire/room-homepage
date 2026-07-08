import { SLIDES } from "@js/data";
import { ANIMATION_DURATION, prefersReducedMotion } from "@js/shared";

export function createSliderController({
  sourceElement,
  imageElement,
  titleElement,
  descriptionElement,
}) {
  let currentIndex = 0;
  let isAnimating = false;

  function render() {
    const slide = SLIDES[currentIndex];

    sourceElement.srcset = slide.image.desktop;
    imageElement.src = slide.image.mobile;
    imageElement.alt = slide.image.alt;

    titleElement.textContent = slide.title;
    descriptionElement.textContent = slide.description;
  }

  function animateSlide(update) {
    if (isAnimating) return;

    const elements = [imageElement, titleElement, descriptionElement];

    if (prefersReducedMotion()) {
      update();
      return;
    }

    isAnimating = true;

    elements.forEach((el) => el.classList.add("is-changing"));

    const handleTransitionEnd = () => {
      update();

      requestAnimationFrame(() => {
        elements.forEach((element) => element.classList.remove("is-changing"));

        isAnimating = false;
      });
    };

    imageElement.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });
  }

  function showSlide(index) {
    if (index < 0 || index >= SLIDES.length) {
      return;
    }

    currentIndex = index;
    animateSlide(render);
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % SLIDES.length;
    animateSlide(render);
  }

  function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    animateSlide(render);
  }

  function getCurrentSlideIndex() {
    return currentIndex;
  }

  render();

  return {
    showSlide,
    showNextSlide,
    showPreviousSlide,
    getCurrentSlideIndex,
  };
}
