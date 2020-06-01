

export function pegarPontuacao() {
    const pontuacao = require('./pontuacao.json')
    return pontuacao;
}

export function salvarPontuacao(pontos) {
    const pontuacao = pegarPontuacao();
    pontuacao.push(pontos);
    pontuacao.sort();
    console.log('Antes do Slice', pontuacao)
    pontuacao = pontuacao.slice(0, 3)
    console.log('Depois do Slice', pontuacao)
    fs.writeFileSync('./pontuacao.json', JSON.stringify(pontuacao))
}