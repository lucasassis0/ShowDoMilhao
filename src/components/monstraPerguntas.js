import React from 'react'
import { Text, View, } from 'react-native'

const Perguntas = ({pergunta}) => {
    const nomePergunta = pergunta.Name
    return (
        <View style={styles.pergunta}>
            <Text style={styles.perguntaTexto}>
                {
                    nomePergunta
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
        backgroundColor: '#9a031e',
        flex: 1,
        borderRadius: 20,
        borderColor: "#ffdd55",
        
        
    },
    perguntaTexto: {
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
}

export default Perguntas