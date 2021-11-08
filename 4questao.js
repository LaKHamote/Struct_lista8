const turma = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    }    
]

var tamanho = turma.length
var media = 0
var desvioPadrao = 0

const classStatistics = (turma) => {
    turma.forEach(({mediaFinal}) => {
        media += mediaFinal
    })
    media /= tamanho
    console.log(media)

    turma.forEach(({mediaFinal}) => {
        desvioPadrao += (mediaFinal - media)**2
    })
    desvioPadrao /= tamanho
    desvioPadrao = Math.sqrt(desvioPadrao)
    console.log(desvioPadrao)

    turma.forEach(({nome, mediaFinal}) => {
        mediaFinal < 5 ? console.log(nome + " Reprovado") : null
    })
    }

const addMencao = (turma) => {
    let turmaComMensoes = []
    turma.forEach((aluno)=> {
        if (aluno.mediaFinal < 5) {
            turmaComMensoes.push({...aluno, mensao: "RR"})
        }
        else if (aluno.mediaFinal >= 5 && aluno.mediaFinal <= 7){
            turmaComMensoes.push({...aluno, mensao: "MM"})
        }
        else if (aluno.mediaFinal >= 7 && aluno.mediaFinal <= 9){
            turmaComMensoes.push({...aluno, mensao: "MS"})
        }
        else {
            turmaComMensoes.push({...aluno, mensao: "SS"})
        }
    })
    return turmaComMensoes
}
    






console.log(addMencao(turma))
classStatistics(turma)

