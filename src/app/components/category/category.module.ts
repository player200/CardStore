import { Kinvey } from '../../core/services/remote';
import { CategoryService } from '../../core/services/category.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@NgModule({
    declarations: [
        CreateCategoryComponent,
        ListCategoryComponent,
        DeleteCategoryComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CategoryRoutingModule
    ],
    providers: [
        CategoryService,
        Kinvey
    ]
})
export class CategoryModule { }