import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CardModel } from '../../../core/models/card/card.model';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  model: CardModel
  id: string

  constructor(private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.cardService
      .getWithId(this.id)
      .subscribe(data => this.model = data)
  }

  edit() {
    this.cardService
      .edit(this.id, this.model)
      .subscribe(() => {
        this.toastr.success('Edited successful', 'Success!')
        this.router.navigate(['/card/all'])
      })
  }
}