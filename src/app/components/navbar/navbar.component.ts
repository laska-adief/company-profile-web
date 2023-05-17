import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpenMenuMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openMenuMobile() {
    this.isOpenMenuMobile = !this.isOpenMenuMobile;
  }
}
