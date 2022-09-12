class Pessoa {
    nome;
    idade;
    endereço;
    constructor(nome) {
          this.nome = nome
    }
}

class Aluno extends Pessoa {
    matricula;
    ativo = true
}

class Funcionario extends Pessoa {
    salario;
}

const aluno1 = new Aluno()
const Func = new Funcionario()


console.log(aluno1)
console.log(Func)