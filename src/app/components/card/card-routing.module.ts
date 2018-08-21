import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MyCardComponent } from './my-card/my-card.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

const cardRoutes: Routes = [
    { path: 'all', component: ListCardComponent },
    { path: 'create', component: CreateCardComponent },
    { path: 'details/:id', component: DetailCardComponent },
    { path: 'mine', component: MyCardComponent },
    { path: 'edit/:id', component: EditCardComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(cardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CardRoutingModule { }