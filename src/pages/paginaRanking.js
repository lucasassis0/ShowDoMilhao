import 'react-native-gesture-handler'
import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import Botao from '../components/Botao'
import CampoPosicao from '../components/CampoPosicao'
import resultado from '../components/resultado'


const PaginaRanking = ({ navigation, route }) => {
    // const { resposta} = route.params.data
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={'#172178'} />
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />

            <View style={styles.containerButton}>

                <View style={styles.textInput} >
                    <CampoPosicao title={'Pontuação --->'} />
                    <CampoPosicao title={'Pontuação --->'} />
                    <CampoPosicao title={'Pontuação --->'} />
                </View>

            </View>
            <Botao title={'Jogar'} onPress={() => { navigation.navigate('PaginaJogo') }} />

        </View>

    )

}

const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#172178',
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
        height: 250,
        width: 400,
        backgroundColor: '#9a031e',
        borderColor: '#ffdd55',
        borderWidth: 2,
        margin: 20,
        borderRadius: 15,


    },

    text: {
        borderColor: '#EBCD06',
        height: 35,
        width: 200,
        backgroundColor: '#172178',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
    },
}
export default PaginaRanking;