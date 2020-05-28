import React from 'react'
import { Text, View } from 'react-native'

const Posicao = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}> Errar </Text>
                    <Text style={styles.valor}>1000</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}>Acertar </Text>
                    <Text style={styles.valor}>3000</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.posicao}>Parar </Text>
                    <Text style={styles.valor}>2000</Text>
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
        color:'white',
        alignSelf: 'center',
    },
    posicao: {
        fontWeight: 'bold',
        color: '#FAFF00',
        alignSelf: 'center',
    }
}
export default Posicao