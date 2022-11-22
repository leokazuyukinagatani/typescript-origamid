export class Slide {
  container;
  slides;
  controls;
  time;
  index;
  slide;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.show(0);
    this.index = 0;
    this.slide = this.slides[this.index];
  }
  hide(el: Element) {
    el.classList.remove("active");
  }
  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach((slide) => this.hide(slide));
    this.slide.classList.add("active");
  }
}
