import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'

const PaginaDerrota = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo}
                    style={styles.logo} />
            </View>
            <View style={styles.caixaDeTexto}>
                <Text style={styles.texto}> Resposta errada, você perdeu! {'\n\n'} Sua premiação foi: {'\n'} 1000</Text>

            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PaginaJogo') }}>
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
export default PaginaDerrota

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
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#9a031e',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: '#ffdd55',
        borderWidth: 1,
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
        fontSize: 18,
        color: '#ffffff',
    }
})
