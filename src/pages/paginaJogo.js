import React, { useState } from 'react'
import { View, StatusBar } from 'react-native'
import Perguntas from '../components/monstraPerguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
import { geraDificiculdade } from '../components/geraIndicePerguntas'
import Botoes from '../components/botoesJogo'


const perguntas = require('../db/questions.json')
const PaginaJogo = ({ navigation }) => {

    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [indicePergunta, geraNovaPergunta] = useState(0)
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)

    const numero = geraDificiculdade(perguntasRespondidas, indicePergunta)
    console.log('numero: ', numero);
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer


    const reiniciaJogo = () => {
        console.log('reinica')
        setPerguntasRespondidas({})
        geraNovaPergunta(0)
        setPulo(0)
        setButtonPulo(false)
    }
    

    const notificaResposta = (acertou) => {
        console.log('indicePergunta: ', indicePergunta);
        if(indicePergunta === 14){
            setButtonPulo(true)
        }
        if (indicePergunta > 14) {
            reiniciaJogo()
            navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: acertou } })
        } else if (acertou) {
            geraNovaPergunta(indicePergunta + 1)
        } else {
            reiniciaJogo()
            navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: acertou } })
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <Perguntas pergunta={pergunta} />
            <Alternativas alternativas={alternativa} correta={correta} notificaResposta={notificaResposta} />
            <Posicao indice={indicePergunta} notificaResposta={notificaResposta} />
            <Botoes  buttonPulo={buttonPulo} setButtonPulo={setButtonPulo} setPulo={setPulo} pulo={pulo} reiniciaJogo={reiniciaJogo} navigation={navigation} indicePergunta={indicePergunta} />
        </View>
    )
}

const styles = {
    container: {
        backgroundColor: '#172178',
        flex: 1,
        padding: 10,
    }
}
export default PaginaJogo