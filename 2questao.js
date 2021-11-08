const Arthur = {
    paoDeQueijo: true,
    pet: false,
    carteiraDeTrabalho: true,
    relogio: 1800
}

const entrarNaSurdina = ({relogio}) => relogio >= 1800
const VencerEduardo = ({paoDeQueijo}) => paoDeQueijo
const VencerGabriel = ({pet}) => pet
const VencerFelipe = ({carteiraDeTrabalho}) => carteiraDeTrabalho


const Arthurfight = (Arthur) => {
    if (entrarNaSurdina(Arthur)){
        return "Vitoria"
    }
    else {
        if (VencerEduardo(Arthur)){
            if (VencerGabriel(Arthur)){
                if (VencerFelipe(Arthur)){
                    return "Vitoria"
                }
            }
        }
    }
    return "Derrota"
}
   

console.log(Arthurfight(Arthur))