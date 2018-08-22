import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { ActivatedRoute } from '@angular/router';

import { CardModel } from '../../../core/models/card/card.model';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  model: CardModel
  id: string

  constructor(private cardService: CardService,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService
      .getWithId(this.id)
      .subscribe(data => this.model = data)
  }

  delete(id: string) {
    return this.cardService
      .delete(id)
      .subscribe()
  }
}
