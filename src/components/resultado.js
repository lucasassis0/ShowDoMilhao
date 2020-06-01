import vitoria from './vitoria'
import derrota from './derrota'
import parou from './parou'
import {salvarPontuacao} from '../db/pontuacao.js'
function resultado(res, indice) {
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const premioQuandoParar = premio[indice] / 2
    const premioQuandoErrar = premioQuandoParar / 2

    let pontuacao = 0;

    switch (res) {
        case true:
            pontuacao = 1000000;
            return vitoria('1 Milhão')
        case false:
            if (premio[indice] === 1000) {
                pontuacao = 0;
                return derrota(0)
            } else {
                pontuacao = premioQuandoErrar;
                return derrota(premioQuandoErrar)
            }
        case 'PAROU':
            if (premio[indice] === 1000) {
                pontuacao = 0;
                return parou(0)
            } else {
                pontuacao = premioQuandoParar;
                return parou(premioQuandoParar)
            }
        default:
            break;
    }

    salvarPontuacao(pontuacao)

}

export default resultado