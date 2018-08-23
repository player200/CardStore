import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';
import { ToastrService } from 'ngx-toastr';

import { GetCategoryModel } from '../../../core/models/category/get-category.model';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {
  model: GetCategoryModel
  id: string

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
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
      .subscribe(()=>{
        this.toastr.success('Deleted successful', 'Success!')
        this.router.navigate(['/all'])
      })
  }
}
