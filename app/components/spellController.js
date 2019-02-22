import SpellService from "./spellService.js";

let _ss = new SpellService()

function drawSpellApi() {
    let template = ''
    _ss.SpellsApi.forEach(s => {
        template += `
        <li class="spellDB" onclick="app.controllers.spellController.getDetails('${s.url}')">${s.name}</li>
        `
    })
    document.querySelector('#api-spells').innerHTML = template
}

function drawActiveSpell() {
    let spell = _ss.ActiveSpell
    let button = `<button onclick="app.controllers.spellController.addSpell()" class="btn btn-danger">Add Spell</button >`
    let template = spell.getTemplate(button)
    document.querySelector('#active-spell').innerHTML = template
}

function drawSpellbook() {
    let template = ''
    _ss.MySpellBook.forEach(s => {
        let button = `<button onclick="app.controllers.spellController.removeSpell('${s._id}')" class="btn btn-danger">Remove Spell</button>`
        template += s.getTemplate(button)
    })
    document.querySelector('#my-spellbook').innerHTML = template
}

export default class SpellController {
    constructor() {
        _ss.addSubscriber('spellsApi', drawSpellApi)
        _ss.addSubscriber('activeSpell', drawActiveSpell)
        _ss.addSubscriber('mySpellBook', drawSpellbook)
        _ss.getSpellData()
        _ss.getSpellBook()
    }

    getDetails(url) {
        _ss.getDetails(url)
    }

    showDetails(id) {
        _ss.showDetails(id)
    }

    addSpell() {
        _ss.addSpell()
    }
    removeSpell(id) {
        _ss.removeSpell(id)
    }
}