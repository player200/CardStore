import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Kinvey } from '../../core/services/remote';
import { CategoryService } from '../../core/services/category.service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
    declarations: [
        CreateCategoryComponent
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