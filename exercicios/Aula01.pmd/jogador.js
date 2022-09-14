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
    /*receberDano(valor) {
        this.energia -= valor
    }
    
    atacar(jogador) {
        jogador.receberDano(2)
    }
    
    receberCura(valor) {
        this.energia += valor
    } */
}


const jogador1 = new Jogador("João", 2, false)
const jogador2 = new Jogador("Mateus", 10, true)
const jogador3 = new Jogador("Marcos", 8, true)

/*jogador1.atacar(jogador2)
jogador2.receberCura(5)*/

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)