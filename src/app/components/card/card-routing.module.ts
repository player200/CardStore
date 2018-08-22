import { CreateCardComponent } from './create-card/create-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { MyCardComponent } from './my-card/my-card.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { AuthenticationGuard } from '../../core/guards/authentication.guard';
import { DeleteCardComponent } from './delete-card/delete-card.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cardRoutes: Routes = [
    { path: 'all', component: ListCardComponent },
    { path: 'create', canActivate: [AuthenticationGuard], component: CreateCardComponent },
    { path: 'details/:id', component: DetailCardComponent },
    { path: 'mine', canActivate: [AuthenticationGuard], component: MyCardComponent },
    { path: 'edit/:id', canActivate: [AuthenticationGuard], component: EditCardComponent },
    { path: 'delete/:id', canActivate: [AuthenticationGuard], component: DeleteCardComponent }
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