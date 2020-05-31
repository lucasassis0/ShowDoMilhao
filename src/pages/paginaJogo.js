import React, { useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import Perguntas from '../components/monstraPerguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
import { Alert } from 'react-native'
import { geraDificiculdade } from '../components/geraIndicePerguntas'


const perguntas = require('../db/questions.json')
const PaginaJogo = ({ navigation }) => {

    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [indicePergunta, geraNovaPergunta] = useState(0)
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)

    const numero = geraDificiculdade(perguntasRespondidas, indicePergunta)
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer

    const reiniciaJogo = () => {
        setPerguntasRespondidas({})
        geraNovaPergunta(0)
        setPulo(0)
        setButtonPulo(false)
    }

    const parar = () => {
        reiniciaJogo()
        navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: 'PAROU' } })
    }

    const pular = () => {
        if (pulo < 3) {
            setPulo(pulo + 1)
            Alert.alert('voce pulou')
            if (pulo == 2) {
                setButtonPulo(true)
            }
        }
    }

    const notificaResposta = (acertou) => {
        if (indicePergunta > 15) {
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <Button title='Pular' onPress={pular} disabled={buttonPulo} titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
                <Button title='Parar' onPress={parar} titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
            </View>
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