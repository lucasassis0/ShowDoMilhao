import React from 'react'
import { Text, View, Image } from 'react-native'
import Botao from '../components/Botao'

const PaginaHome = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
            <View style={styles.containerButton}>
                <Botao title={'Jogar'} onPress={() => { navigation.navigate('PaginaJogo')}} />
                <Botao title={'Ranking'} onPress={() => { navigation.navigate('PaginaRanking')}}/>
            </View>

        </View>
    )
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#03045e',
    },
    containerButton: {
        flex: 2,
    },
    logo: {
        margin: 10,
        flex: 1,
        width: 400,
    },

    textInput: {
        height: 100,
        width: 350,
        backgroundColor: '#9a031e',
        borderColor: '#f6aa1c',
        borderWidth: 2,
        margin: 20,
        borderRadius: 15,
    },
    iconInput: {
        height: 10,
        width: 50,
        backgroundColor: '#03045e',
        borderColor: '#f6aa1c',
        borderWidth: 2,
        margin: 20,
        borderRadius: 50
    }
}
export default PaginaHome;