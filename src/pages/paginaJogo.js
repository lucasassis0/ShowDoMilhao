import React from 'react'
import { Text, View, } from 'react-native'
import { Button } from 'react-native-elements'
import Perguntas from '../components/perguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
const PaginaJogo = () => {
    // const questions = '../db/questions.json' 
    const Pergunta = require('../db/questions.json')
    const pergun = Pergunta[5].Name
    const alter = Pergunta[5].Answers

    return (
        <View style={styles.container}>
            <Perguntas pergunta={pergun} />
            <Alternativas alternativas={alter} />
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