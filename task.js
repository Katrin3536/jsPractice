class Simafore {
    static #instance = null
    constructor(name,age){
        if(Simafore.#instance){
            return Simafore.#instance
        } else {
            Simafore.#instance = {name:name,age:age}
        }
        return Simafore.#instance
    }
}

const user1 = new Simafore('Z', 30)
const user2 = new Simafore('I', 25)
console.log(user1)
console.log(user2)