import React from 'react'
import { Text, View, } from 'react-native'
import { Button } from 'react-native-elements'
import Perguntas from '../components/perguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
const PaginaJogo = () => {
    const questions = require('../db/questions.json')
    let num = Math.floor(Math.random() * 50)
    let perguntas = questions[num]
    let perguntasRespondidas = []
    perguntasRespondidas.push(num)
    let verifica = perguntasRespondidas.includes(num)


    const pergunta = perguntas.Name
    const alternativa = perguntas.Answers
    const correta = perguntas.CorrectAnswer

    return (
        <View style={styles.container}>
            <Perguntas pergunta={pergunta} />
            <Alternativas alternativas={alternativa} correta={correta} />
            <Posicao />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                <Button title='Pular' titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
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