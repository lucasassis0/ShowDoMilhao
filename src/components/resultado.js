import vitoria from './vitoria'
import derrota from './derrota'
import parou from './parou'

function resultado(res, indice) {
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const parar = premio[indice] / 2
    const errar = parar / 2
    
    switch (res) {
        case true:
            return vitoria('1 Milhão')
        case false:
            return derrota(errar)
        case 'PAROU':
            if (premio[indice] === 1000) {
                return parou(0)
            }else{
                return parou(parar)
            }
        default:
            break;
    }
}

export default resultado