import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';
import { ToastrService } from 'ngx-toastr';

import { CategoryModel } from '../../../core/models/category/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  model: CategoryModel

  constructor(private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService) {
    this.model = new CategoryModel('')
  }

  ngOnInit() { }

  create() {
    this.categoryService
      .create(this.model)
      .subscribe(() => {
        this.toastr.success('Created successful', 'Success!')
        this.router.navigate(['/all'])
      })
  }
}