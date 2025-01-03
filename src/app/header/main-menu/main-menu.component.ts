import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: string[] = [
    'Home',
    'Products',
    'Sales',
    'New Arrivals',
    'Contact',
  ];

  constructor() {}

  ngOnInit(): void {}
}
