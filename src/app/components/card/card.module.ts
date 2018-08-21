import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Kinvey } from '../../core/services/remote';
import { CardRoutingModule } from './card-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardService } from '../../core/services/card.service';
import { ListCardComponent } from './list-card/list-card.component';
import { MyCardComponent } from './my-card/my-card.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
    declarations: [
        CreateCardComponent,
        ListCardComponent,
        MyCardComponent,
        DetailCardComponent,
        EditCardComponent
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