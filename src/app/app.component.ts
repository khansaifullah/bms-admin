import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

declare var $:any;
// Component App
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router, private data: DataService) {
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('x-auth-token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }


  logout() {
    console.log('logOut');
    this.data.user = {};
    localStorage.clear();
    this.router.navigate(['/']);
  }

  search() { }
}
