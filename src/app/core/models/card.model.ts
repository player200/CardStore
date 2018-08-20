export class CardModel {
    constructor(
        public name: string,
        public categoryId: string,
        public price: number,
        public description: string,
        public imageUrl: string
    ) { }
}