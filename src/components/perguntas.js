import React from 'react'
import { Text, View, } from 'react-native'

const Perguntas = ({pergunta}) => {
    
    return (
        <View style={styles.pergunta}>
            <Text style={styles.perguntaTexto}>
                {
                    pergunta
                }
            </Text>
        </View>
    )
}
const styles = {
    pergunta: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#B71B1B',
        flex: 1,
        borderRadius: 20,
        borderBottomColor: "#bbb",
        backgroundColor: '#B71B1B',
        borderColor: '#f6aa1c',
    },
    perguntaTexto: {
        fontSize: 18,
        color: '#FAFF00',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
}

export default Perguntas