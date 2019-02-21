import SpellService from "./spellService.js";

let _ss = new SpellService()

function drawSpellApi() {
    let template = ''
    _ss.SpellsApi.forEach(s => {
        template += `
        <li onclick="app.controllers.spellController.getDetails('${s.url}')">${s.name}</li>
        `
    })
    document.querySelector('#api-spells').innerHTML = template
}

function drawActiveSpell() {
    document.querySelector('#active-spell').innerHTML = _ss.ActiveSpell.getTemplate()
}


export default class SpellController {
    constructor() {
        _ss.addSubscriber('spellsApi', drawSpellApi)
        _ss.addSubscriber('activeSpell', drawActiveSpell)
        _ss.getSpellData()
    }

    getDetails(url) {
        _ss.getDetails(url)
    }
}