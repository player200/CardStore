import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../core/models/card.model';
import { CardService } from '../../../core/services/card.service';
import { CategoryService } from '../../../core/services/category.service';
import { GetCategoryModel } from '../../../core/models/get-category.model';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  model: CardModel
  categories: Array<any>
  
  constructor(private cardService: CardService,
    private categoryService: CategoryService) {
    this.model = new CardModel('', '', 0, '', '');
  }

  create() {
    this.cardService
      .create(this.model)
      .subscribe()
  }

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
}
