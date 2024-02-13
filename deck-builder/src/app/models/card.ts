export class Card {
    name!: string
    image!: string
    description!: string

    constructor() {
        this.name = 'Card Name'
        this.image = 'https://via.placeholder.com/150'
        this.description = 'Card Description'
    }
}