import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Kinvey } from '../../core/services/remote';
import { CardRoutingModule } from './card-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardService } from '../../core/services/card.service';

@NgModule({
    declarations: [
        CreateCardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CardRoutingModule
    ],
    providers: [
        CardService,
        Kinvey
    ]
})
export class CardModule { }