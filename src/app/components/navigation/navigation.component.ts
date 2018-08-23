import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi: string = "nav-item dropdown"
  dropdownMenu: string = "dropdown-menu"
  dropdownLiSecond: string = "nav-item dropdown"
  dropdownMenuSecond: string = "dropdown-menu"

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe()
  }

  expandCategory() {
    this.dropdownLi.endsWith('show')
      ? this.dropdownLi = "nav-item dropdown"
      : this.dropdownLi = "nav-item dropdown show"

    this.dropdownMenu.endsWith('show')
      ? this.dropdownMenu = "dropdown-menu"
      : this.dropdownMenu = "dropdown-menu show"
  }

  expandCard() {
    this.dropdownLiSecond.endsWith('show')
      ? this.dropdownLiSecond = "nav-item dropdown"
      : this.dropdownLiSecond = "nav-item dropdown show"

    this.dropdownMenuSecond.endsWith('show')
      ? this.dropdownMenuSecond = "dropdown-menu"
      : this.dropdownMenuSecond = "dropdown-menu show"
  }
}
