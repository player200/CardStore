import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CardModel } from "../models/card/card.model";
import { DetailCardModel } from "../models/card/detail-card.model";
import { ListingCardModel } from "../models/card/listing-card.model";

const module: string = 'appdata'
const endpoint: string = 'Card'

@Injectable()
export class CardService {
    constructor(private requester: Kinvey,
        private http: HttpClient) { }

    getAll(): Observable<ListingCardModel[]> {
        let url = this.requester.getUrl(module, endpoint)
        return this.http.get<ListingCardModel[]>(url)
    }

    getAllMyCards(creatorId: string): Observable<ListingCardModel[]> {
        let url = this.requester.getUrl(module, endpoint + `?query={"_acl.creator":"${creatorId}"}`)
        return this.http.get<ListingCardModel[]>(url)
    }

    getWithId(id: string): Observable<CardModel> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)
        return this.http.get<CardModel>(url)
    }

    getWithIdDetail(id: string): Observable<DetailCardModel> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)
        return this.http.get<DetailCardModel>(url)
    }

    create(body: CardModel): Observable<Object> {
        let url = this.requester.getUrl(module, endpoint)
        let bodyToStr = JSON.stringify(body)

        return this.http.post(url, bodyToStr)
    }

    edit(id: string, body: CardModel): Observable<Object> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)
        let bodyToStr = JSON.stringify(body)

        return this.http.put(url, bodyToStr)
    }

    delete(id: string): Observable<Object> {
        let url = this.requester.getUrl(module, endpoint + '/' + id)

        return this.http.delete(url)
    }
}