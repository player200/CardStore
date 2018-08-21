import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { AuthService } from '../../../core/services/auth.service';
import { ListingCardModel } from '../../../core/models/card/listing-card.model';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
  cards: ListingCardModel[]
  constructor(private cardService: CardService,
    private authService: AuthService) { }

  ngOnInit() {
    this.cards = []
    this.cardService
      .getAllMyCards(this.authService.getCurrentUserId())
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