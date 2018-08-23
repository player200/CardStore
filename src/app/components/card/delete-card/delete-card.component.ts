import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  delete(id: string) {
    return this.cardService
      .delete(id)
      .subscribe(()=>{
        this.toastr.success('Deleted successful', 'Success!')
        this.router.navigate(['/card/all'])
      })
  }
}
