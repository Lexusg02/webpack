export default class Post {
    constructor(title) {
        this.title = title
        this.image = image
        this.date = new Date()
    }

toString() {
    return JSON.stringify( {
        title: this.title,
        date: this.date.toJSON(),
        img: this.image
    })
}
    get uppercaseTitle(){
        return this.title.toUpperCase()
    }
}