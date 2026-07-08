import { SLIDES } from "@js/data";
import { ANIMATION_DURATION, prefersReducedMotion } from "@js/shared";

export function createSliderController({
  sourceElement,
  imageElement,
  titleElement,
  descriptionElement,
}) {
  let currentIndex = 0;
  const animatedElements = [imageElement, titleElement, descriptionElement];

  function render() {
    const slide = SLIDES[currentIndex];

    sourceElement.srcset = slide.image.desktop;
    imageElement.src = slide.image.mobile;
    imageElement.alt = slide.image.alt;

    titleElement.textContent = slide.title;
    descriptionElement.textContent = slide.description;
  }

  function animateSlide(callback) {
    if (prefersReducedMotion()) {
      callback();
      return;
    }

    animatedElements.forEach((element) => {
      element.classList.add("is-changing");
    });

    setTimeout(() => {
      callback();

      animatedElements.forEach((element) => {
        element.classList.remove("is-changing");
      });
    }, ANIMATION_DURATION); // Adjust the duration as needed
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
