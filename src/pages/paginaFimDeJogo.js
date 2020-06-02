import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image,  TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'
import resultado from '../components/resultado'


const PaginaFimDeJogo = ({ navigation, route }) => {

    const { indicePremio, resposta } = route.params.data


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo}
                    style={styles.logo} />
            </View>
            <View style={styles.caixaDeTexto}>
                {resultado(resposta, indicePremio)}
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.push('PaginaJogo') }}>
                    <Text style={styles.buttonText}>Jogar Novamente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PaginaHome') }}>
                    <Text style={styles.buttonText}>Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 70,
        margin: 10,
    },
    caixaDeTexto: {
        flex: 2,
        width: '75%',
        backgroundColor: '#9a031e',
        borderRadius: 40,
        borderColor: '#ffdd55',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerButton: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#9a031e',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: '#ffdd55',
        borderWidth: 2,
        marginHorizontal: 10,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 19,
        color: '#ffffff',
    }
})
export default PaginaFimDeJogo;