import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { CardModel } from "../models/card/card.model";

@Injectable()
export class CardService {
    constructor(private requester: Kinvey) { }

    create(body: CardModel) {
        return this.requester.post('appdata', 'Card', body)
    }

    getAll() {
        return this.requester.get('appdata', 'Card')
    }

    getAllMyCards(creatorId: string) {
        let endpoint = `Card?query={"_acl.creator":"${creatorId}"}`

        return this.requester.get('appdata', endpoint)
    }

    delete(id: string) {
        let endpoint = 'Card/' + id
        return this.requester.delete('appdata', endpoint)
    }

    getWithId(id: string) {
        let endpoint = 'Card/' + id
        return this.requester.get('appdata', endpoint)
    }

    edit(id: string, body: CardModel) {
        let endpoint = 'Card/' + id
        return this.requester.update('appdata', endpoint, body)
    }
}