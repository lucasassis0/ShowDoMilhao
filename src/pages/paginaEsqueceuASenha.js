import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'

const PaginaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.caixaDeLogin}>
                <Text style={styles.textoCaixaDeLogin}>E-Mail:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Seu e-mail'
                    placeholderTextColor='gray'
                />
                <Text style={styles.textoCaixaDeLogin}>Nova senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Nova senha'
                    placeholderTextColor='gray'
                />
                <Text style={styles.textoCaixaDeLogin}>Confirmar senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Confirmar senha'
                    placeholderTextColor='gray'
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { navigation.navigate('PaginaHome') }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PaginaLogin

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 100,
        margin: 30
    },
    caixaDeLogin: {
        width: '85%',
        flex: 1.5,
        backgroundColor: 'gold',
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: '#ffdd55',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    entradaDeTexto: {
        width: '98%',
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: '#c4c4c4'
    },
    textoCaixaDeLogin: {
        paddingHorizontal: 6,
        paddingTop: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    botaoCadastrar: {
        textAlign: 'center',
        color: 'gold',
        fontSize: 20,

    },
    containerButton: {
        flex: 1
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#b71b1b',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: 'gold',
        borderWidth: 1,
        marginVertical: 60,
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
        color: '#EBCD06',
    }
})