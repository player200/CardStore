import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';

import { GetCategoryModel } from '../../../core/models/category/get-category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  model: GetCategoryModel
  id: string

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.categoryService
      .getCategoryById(this.id)
      .subscribe(data => this.model = data)
  }

  delete(id: string) {
    return this.categoryService
      .delete(id)
      .subscribe()
  }
}
