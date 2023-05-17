import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  departmentList = [
    {
      id: 1,
      name: 'TECHNOLOGY DEPARTMENT',
      address:
        'Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat',
    },
    {
      id: 2,
      name: 'MARKETING DEPARTMENT',
      address:
        'Jl. Mawar No 10 Kel. Jeta Kec. Depok Sari, Kota Malang, Jawa Timur',
    },
    {
      id: 3,
      name: 'HUMAN RESOURCE DEPARTMENT',
      address:
        'Jl. Kembanga No 19 Kel. Tegalsari Kec. Suarita, Kota Magelang, Jawa Tengah',
    },
  ];

  selectedDepartment = this.departmentList[0].address;

  constructor() {}

  ngOnInit(): void {}
}
