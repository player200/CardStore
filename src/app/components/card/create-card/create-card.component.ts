import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { CategoryService } from '../../../core/services/category.service';

import { CardModel } from '../../../core/models/card/card.model';
import { GetCategoryModel } from '../../../core/models/category/get-category.model';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  model: CardModel
  categories: GetCategoryModel[]

  constructor(private cardService: CardService,
    private categoryService: CategoryService) {
    this.model = new CardModel('', '', 0, '', '')
  }

  ngOnInit() {
    this.categoryService
      .getAll()
      .subscribe(data => this.categories = data)
  }
  
  create() {
    this.cardService
      .create(this.model)
      .subscribe()
  }
}
