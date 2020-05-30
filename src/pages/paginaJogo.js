import React, { useState } from 'react'
import { Text, View, } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import Perguntas from '../components/monstraPerguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
import { Alert } from 'react-native'

const perguntas = require('../db/questions.json')
const PaginaJogo = ({ navigation }) => {

    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [indicePergunta, geraNovaPergunta] = useState(0)
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)
    const [visible, setVisible] = useState(false)
    
    const toggleOverlay = () => {
    setVisible(!visible);
    }
    const geraIndices = (perguntasRespondidas) => {
        let num = Math.floor(Math.random() * 50)
        if (perguntasRespondidas[num]) {
            return geraIndices(perguntasRespondidas)
        } else {
            perguntasRespondidas[num] = num
            return num
        }
    }

    const numero = geraIndices(perguntasRespondidas)
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer

    const reiniciaJogo = () => {
        setPerguntasRespondidas({})
        geraNovaPergunta(0)
        setPulo(0)
        setButtonPulo(false)
    }

    const pular = () => {
        if (pulo < 3) {
            setPulo(pulo + 1)
            if (pulo == 2) {
                setButtonPulo(true)
            }
        } else {
            console.log('voce pulou 3 vezes')
        }
    }

    const notificaResposta = (acertou, alter) => {
        if (indicePergunta > 15) {
            reiniciaJogo()
            navigation.navigate('Parou')
        } else if (acertou) {
            geraNovaPergunta(indicePergunta + 1)

        } else {
            reiniciaJogo()
            navigation.navigate('Parou')
        }

    }

    return (
        <View style={styles.container}>
            <Perguntas pergunta={pergunta} />
            <Alternativas alternativas={alternativa} correta={correta} notificaResposta={notificaResposta} />
            <Posicao indice={indicePergunta} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <Button title='Pular' onPress={pular} disabled={buttonPulo} titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
                <Button title='Parar' titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
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