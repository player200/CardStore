import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { GetCategoryModel } from '../../../core/models/category/get-category.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: Array<any>
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = []
    this.categoryService
      .getAll()
      .subscribe((data: Array<object>) => {
        data.forEach(curObj => {
          let newObj = new GetCategoryModel(curObj['_id'], curObj['name'])
          this.categories.push(newObj)
        })
      })
  }

  delete(id: string) {
    this.categories = []
    return this.categoryService
      .delete(id)
      .subscribe(() => {
        this.categoryService
          .getAll()
          .subscribe((data: Array<object>) => {
            data.forEach(curObj => {
              let newObj = new GetCategoryModel(curObj['_id'], curObj['name'])
              this.categories.push(newObj)
            })
          })
      })
  }
}
