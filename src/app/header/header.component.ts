import { Component, OnInit } from '@angular/core';
import { loggedInStatus } from 'src/loggedInStatus';

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
    return loggedInStatus.loggedIn;
  }

  onLogout() {
    localStorage.removeItem('token');
  }
}
