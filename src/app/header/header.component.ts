import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  loginHidden = false;
  dropdownHidden = true;
  navBarCollapsed = true;

  constructor() {}

  ngOnInit(): void {}

  loggedIn() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
  }
}
