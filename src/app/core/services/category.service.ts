import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CategoryModel } from "../models/category/category.model";
import { GetCategoryModel } from "../models/category/get-category.model";

const module: string = 'appdata'
const endpoint: string = 'Category'

@Injectable()
export class CategoryService {
    constructor(private requester: Kinvey,
        private http: HttpClient) { }

    getAll(): Observable<GetCategoryModel[]> {
        let url = this.requester.getUrl(module, endpoint)
        return this.http.get<GetCategoryModel[]>(url)
    }

    getCategoryById(id: string): Observable<GetCategoryModel> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)
        return this.http.get<GetCategoryModel>(url)
    }

    create(body: CategoryModel): Observable<Object> {
        let url = this.requester.getUrl(module, endpoint)
        let bodyToStr = JSON.stringify(body)

        return this.http.post(url, bodyToStr)
    }

    delete(id: string): Observable<Object> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)

        return this.http.delete(url)
    }
}