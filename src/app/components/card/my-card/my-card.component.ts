import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';

import { ListingCardModel } from '../../../core/models/card/listing-card.model';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
  cards: Observable<ListingCardModel[]>

  constructor(private cardService: CardService,
    private authService: AuthService) { }

  ngOnInit() {
    this.cards = this.cardService.getAllMyCards(this.authService.getCurrentUserId())
  }
}