export const geraIndicesFacil = (perguntasRespondidas) => {
    let num = Math.floor(Math.random() * (51 - 0)) + 0
    if (perguntasRespondidas[num]) {
        return geraIndicesFacil(perguntasRespondidas)
    } else {
        perguntasRespondidas[num] = num
        return num
    }
}
export const geraIndicesIntermediario = (perguntasRespondidas) => {
    let num = Math.floor(Math.random() * (91 - 51)) + 51
    if (perguntasRespondidas[num]) {
        return geraIndicesIntermediario(perguntasRespondidas)
    } else {
        perguntasRespondidas[num] = num
        return num
    }
}
export const geraIndicesDificil = (perguntasRespondidas) => {
    let num = Math.floor(Math.random() * (131 - 91)) + 91
    if (perguntasRespondidas[num]) {
        return geraIndicesDificil(perguntasRespondidas)
    } else {
        perguntasRespondidas[num] = num
        return num
    }
}

export const geraDificiculdade = (perguntasRespondidas, indicePergunta) => {
    if (indicePergunta < 6) {
        return geraIndicesFacil(perguntasRespondidas)
    } else if (indicePergunta >= 6 && indicePergunta <= 11) {
        return geraIndicesIntermediario(perguntasRespondidas)
    } else {
        return geraIndicesDificil(perguntasRespondidas)
    }
}