import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../../core/services/card.service';
import { AuthService } from '../../../core/services/auth.service';

import { ListingCardModel } from '../../../core/models/card/listing-card.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  cards: Observable<ListingCardModel[]>

  constructor(private cardService: CardService,
    private authService: AuthService) { }

  ngOnInit() {
    this.cards = this.cardService.getAll()
  }
}