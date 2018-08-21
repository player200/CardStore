import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { ListingCardModel } from '../../../core/models/card/listing-card.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  cards: ListingCardModel[]
  constructor(private cardService: CardService,
    private authService: AuthService) { }

  ngOnInit() {
    this.cards = []
    this.cardService
      .getAll()
      .subscribe((data: Array<object>) => {
        data.forEach(curObj => {
          let newObj = new ListingCardModel(curObj['_id'], curObj['name'], curObj['price'], curObj['imageUrl'])
          this.cards.push(newObj)
        })
      })
  }

  delete(id: string) {
    this.cards = []
    return this.cardService
      .delete(id)
      .subscribe(() => {
        this.cardService
          .getAll()
          .subscribe((data: Array<object>) => {
            data.forEach(curObj => {
              let newObj = new ListingCardModel(curObj['_id'], curObj['name'], curObj['price'], curObj['imageUrl'])
              this.cards.push(newObj)
            })
          })
      })
  }
}
