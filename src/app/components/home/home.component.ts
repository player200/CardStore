import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../core/services/category.service';

import { GetCategoryModel } from '../../core/models/category/get-category.model';
import { CardService } from '../../core/services/card.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string
  categories: Observable<GetCategoryModel[]>

  constructor(private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getAll()
  }

  find() {
    if (this.id !== undefined) {
      this.router.navigate([`/card/search/${this.id}`])
    }
  }
}
