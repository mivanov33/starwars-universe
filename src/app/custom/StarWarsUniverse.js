import Entity from "./Entity";

export default class StarWarsUniverse {
    constructor() {
        this.entities = [];
    }

    async init() {
        const response = await fetch("https://swapi.booost.bg/api/");
        const data = await response.json();
        
        for (let node in data) {
            const current = await fetch(`${data[node]}`);
            const currentData = await current.json();
            const currentName = node;
            const entity = new Entity(currentName, currentData);
            this.entities.push(entity);
        }
    }
}