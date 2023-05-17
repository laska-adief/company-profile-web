import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-speciality',
  templateUrl: './our-speciality.component.html',
  styleUrls: ['./our-speciality.component.scss'],
})
export class OurSpecialityComponent implements OnInit {
  slides = [
    {
      id: 1,
      title: 'Accessories',
      image: './assets/img/Accesories.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
    },
    {
      id: 2,
      title: 'Speed Improvement',
      image: './assets/img/Speed-Improvement.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
    },
    {
      id: 3,
      title: 'Exhaust',
      image: './assets/img/Exhaust.svg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.',
    },
  ];

  totalSlide = this.slides.length;
  slideActive = 1;

  constructor() {}

  ngOnInit(): void {}

  prevSlide() {
    if (this.slideActive === 1) {
      this.slideActive = this.totalSlide;
    } else {
      this.slideActive -= 1;
    }
  }

  nextSlide() {
    if (this.slideActive === this.totalSlide) {
      this.slideActive = 1;
    } else {
      this.slideActive += 1;
    }
  }

  moveSlide(id: number) {
    this.slideActive = id;
  }
}
