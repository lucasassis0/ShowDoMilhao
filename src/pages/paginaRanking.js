import 'react-native-gesture-handler'
import React from 'react'
import { View , Image, StatusBar} from 'react-native'
import Botao from '../components/Botao'
import CampoPosicao from '../components/CampoPosicao';

const PaginaRanking = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={'#172178'}/>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />

            <View style={styles.containerButton}>
                {/* <Image
                    source={require('../images/mascara-medica.png')}
                    style={{ width: 60, height: 60, borderRadius: 60 / 2, marginTop: 16, marginLeft: 12 }} /> */}

                <View style={styles.textInput} >
                    <CampoPosicao/>
                    <CampoPosicao/>
                    <CampoPosicao/>
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
        backgroundColor: '#b71b1b',
        borderColor: '#EBCD06',
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