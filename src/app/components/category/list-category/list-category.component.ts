import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';

import { GetCategoryModel } from '../../../core/models/category/get-category.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: GetCategoryModel[]
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(data => {
        this.categories = data
      })
  }
}
