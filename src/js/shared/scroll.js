export function lockScroll() {
  document.body.classList.add(
    "u-no-scroll"
  );
}

export function unlockScroll() {
  document.body.classList.remove(
    "u-no-scroll"
  );
}