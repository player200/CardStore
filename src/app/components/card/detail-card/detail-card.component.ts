import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { ActivatedRoute } from '@angular/router';

import { DetailCardModel } from '../../../core/models/card/detail-card.model';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  card: DetailCardModel
  id: string

  constructor(private cardService: CardService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService
      .getWithIdDetail(this.id)
      .subscribe(data => this.card = data)
  }
}