import vitoria from './vitoria'
import derrota from './derrota'
import parou from './parou'

function resultado(res, premio) {
    switch (res) {
        case 'vitoria':
            return vitoria(premio)
        case 'derrota':
            return derrota(premio)
        case 'parou':
            return parou(premio)
        default:
            break;
    }
}

export default resultado