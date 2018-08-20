import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../core/models/category.model';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  model: CategoryModel
  constructor(private categoryService: CategoryService) {
    this.model = new CategoryModel('');
  }

  create() {
    this.categoryService
      .create(this.model)
      .subscribe()
  }

  ngOnInit() {
  }
}
