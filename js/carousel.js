let indicator = document.querySelectorAll('.history-timeline__list li p');
let carouselContent = document.querySelectorAll('#carousel-content');
console.log(indicator);
// console.log(carouselContent);
for (var i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener('click', function () {
    const id = this.getAttribute('data-sectionId');

    for (var i = 0; i < indicator.length; i++) {
      indicator[i].classList.remove('history-timeline__present');
    }

    this.classList.add('history-timeline__present');

    for (var i = 0; i < carouselContent.length; i++) {
      carouselContent[i].classList.add('d-none');
    }

    document
      .querySelector(`[data-sectionId="carousel-${id}"]`)
      .classList.remove('d-none');
  });
}
