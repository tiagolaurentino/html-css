
class aluno {
    nome;
    matricula;
    ativo = true;

    constructor(nome, matricula) {       /*metodo construtor */
        this.nome = nome
         this.matricula = matricula
    }

    responderChamada() {
        console.log(this.nome,"presente")   /*metodo responder chamada */
    }
}

const aluno1 = new aluno("Tiago", 20030)
const aluno2 = new aluno("Maria", 20031)

console.log(aluno1)
console.log(aluno2)         /*metodo construtor */

aluno1.responderChamada()   /*responder chamada */
aluno2.responderChamada()