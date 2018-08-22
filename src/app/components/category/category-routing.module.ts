import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const categoryRoutes: Routes = [
    { path: 'all', component: ListCategoryComponent },
    { path: 'create', component: CreateCategoryComponent },
    { path: 'delete/:id', component: DeleteCategoryComponent }
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