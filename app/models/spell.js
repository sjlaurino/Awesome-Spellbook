export default class Spell {
    constructor(data) {
        this._id = data._id
        this.name = data.name
        this.desc = data.desc
        this.duration = data.duration
        this.level = data.level
        this.page = data.page
        this.url = data.url
    }
    getTemplate() {
        return `
        
        `
    }
}