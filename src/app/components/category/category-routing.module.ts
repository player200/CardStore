import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';

const categoryRoutes: Routes = [
    //{ path: 'all', component: AllFurnitureCompo//nent },
    { path: 'create', component: CreateCategoryComponent },
    //{ path: 'details/:id', component: FurnituresDetailsComponent },
    //{ path: 'mine', component: MyFurnitureComponent },
    //{ path: 'edit/:id', component: EditFurnitureComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(categoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CategoryRoutingModule { }