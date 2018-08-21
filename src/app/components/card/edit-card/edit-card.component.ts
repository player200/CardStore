import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../core/models/card/card.model';
import { CardService } from '../../../core/services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  model: CardModel
  id: string
  constructor(private cardService: CardService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService
      .getWithId(this.id)
      .subscribe(data => {
        this.model = new CardModel(data['name'], data['categoryId'], data['price'], data['description'], data['imageUrl'])
      })
  }

  edit() {
    this.cardService
      .edit(this.id, this.model)
      .subscribe()
  }
}
