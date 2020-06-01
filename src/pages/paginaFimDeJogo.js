import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'
import resultado from '../components/resultado'

<<<<<<< HEAD


const PaginaFimDeJogo = ({ navigation, route }) => {
    const res = 'vitoria'
    const premio = '1 Milhão!'
=======
const PaginaFimDeJogo = ({ navigation, route }) => {
    const { indicePremio, resposta, reiniciar } = route.params.data
    console.log('reiniciar: ', reiniciar);
>>>>>>> 800b1c4b36394e70f9f8e9cdd104f9a4c87efeb6

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#172178'}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo}
                    style={styles.logo} />
            </View>
            <View style={styles.caixaDeTexto}>
                {resultado(resposta, indicePremio)}
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
        </SafeAreaView>
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
        backgroundColor: '#b71b1b',
        borderRadius: 40,
        borderColor: 'gold',
        borderWidth: 1,
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
        backgroundColor: '#b71b1b',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: 'gold',
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
        color: '#EBCD06',
    }
})
export default PaginaFimDeJogo;