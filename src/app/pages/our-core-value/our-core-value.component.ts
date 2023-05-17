import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-core-value',
  templateUrl: './our-core-value.component.html',
  styleUrls: ['./our-core-value.component.scss'],
})
export class OurCoreValueComponent implements OnInit {
  values = [
    {
      id: 1,
      title: 'Dedication',
      text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    {
      id: 2,
      title: 'Intellectual Honesty',
      text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.',
    },
    {
      id: 3,
      title: 'Curiosity',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
