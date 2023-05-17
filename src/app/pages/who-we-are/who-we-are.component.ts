import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent implements OnInit {
  slides = [
    {
      id: 1,
      title: 'Who we are',
      subtitle: 'Technology Company',
      content:
        'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      id: 2,
      title: 'What we do',
      subtitle: 'Professional Brand Management',
      content:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
      id: 3,
      title: 'How we do',
      subtitle: 'Strategize, Design, Collaborate',
      content:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
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
}
