import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { CategoryService } from '../../../core/services/category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CardModel } from '../../../core/models/card/card.model';
import { GetCategoryModel } from '../../../core/models/category/get-category.model';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  model: CardModel
  categories: Observable<GetCategoryModel[]>

  constructor(private cardService: CardService,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService) {
    this.model = new CardModel('', '', 0, '', '')
  }

  ngOnInit() {
    this.categories = this.categoryService.getAll()
  }

  create() {
    this.cardService
      .create(this.model)
      .subscribe(() => {
        this.toastr.success('Created successful', 'Success!')
        this.router.navigate(['/card/all'])
      })
  }
}
