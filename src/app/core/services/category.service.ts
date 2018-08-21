import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { CategoryModel } from "../models/category/category.model";

@Injectable()
export class CategoryService {
    constructor(private requester: Kinvey) { }

    create(body: CategoryModel) {
        return this.requester.post('appdata', 'Category', body)
    }

    getAll() {
        return this.requester.get('appdata', 'Category')
    }

    delete(id: string) {
        let endpoint = 'Category/' + id
        return this.requester.delete('appdata', endpoint)
    }
}