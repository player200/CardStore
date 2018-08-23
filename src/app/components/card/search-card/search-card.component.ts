import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CardService } from '../../../core/services/card.service';
import { AuthService } from '../../../core/services/auth.service';

import { ListingCardModel } from '../../../core/models/card/listing-card.model';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  cards: Observable<ListingCardModel[]>
  id: string

  constructor(private cardService: CardService,
    private authService: AuthService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.cards = this.cardService.getCardsByCategoryId(this.id)
  }
}
