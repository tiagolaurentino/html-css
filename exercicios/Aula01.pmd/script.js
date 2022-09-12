
const aluno = {
    nome: "tiago",
    matrícula: 2036,
    ativo: false,
    responderChamada: () => {
        console.log("presente")
    }
}

console.log(aluno.nome)
console.log(aluno.matrícula, aluno.ativo)
console.log(aluno.ativo)

if (aluno.ativo) console.log("aluno.ativo")

else console.log("aluno.inativo")

aluno.responderChamada()