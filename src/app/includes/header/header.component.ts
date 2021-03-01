import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  navOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onNavToggle() {
    this.navOpen = !this.navOpen;
  }
}
