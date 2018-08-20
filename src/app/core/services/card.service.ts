import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { CardModel } from "../models/card.model";

@Injectable()
export class CardService {
    constructor(private requester: Kinvey) { }

    create(body : CardModel){
        return this.requester.post('appdata', 'Card', body)
    }
}