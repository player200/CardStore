import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';

const cardRoutes: Routes = [
    //{ path: 'all', component: AllFurnitureCompo//nent },
    { path: 'create', component: CreateCardComponent },
    //{ path: 'details/:id', component: FurnituresDetailsComponent },
    //{ path: 'mine', component: MyFurnitureComponent },
    //{ path: 'edit/:id', component: EditFurnitureComponent }
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