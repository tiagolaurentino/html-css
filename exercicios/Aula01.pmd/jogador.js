class Jogador {
    nome;
    energia;
    experiencia;
    envenenado = true

    constructor(nome, energia, envenenado) {
        this.nome = nome
        this.energia = energia
        this.envenenado = envenenado
    }
}


const jogador1 = new Jogador("João", 5, false)
const jogador2 = new Jogador("Mateus", 9, true)
const jogador3 = new Jogador("Marcos", 7, true)

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)