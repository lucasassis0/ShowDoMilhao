import React from 'react'
import { Text, View } from 'react-native'

const Posicao = ({indice}) => {
    const premio = [0 , 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const parar = premio[indice] / 2
    const errar = parar / 2
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}> Errar </Text>
                    <Text style={styles.valor}>R$ {errar} </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}>Acertar </Text>
                    <Text style={styles.valor}>R$ {premio[indice] == 0 ? 1000 : premio[indice]} </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}>Parar </Text>
                    <Text style={styles.valor}>R$ {parar} </Text>
                </View>
            </View>
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
    },
    container1: {
        backgroundColor: '#191970',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 30
    },
    valor: {
        color: 'white',
        alignSelf: 'center',
    },
    posicao: {
        fontWeight: 'bold',
        color: '#FAFF00',
        alignSelf: 'center',
    }
}
export default Posicao