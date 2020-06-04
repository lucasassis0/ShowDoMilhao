import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../images/logo.png'

function Inicio({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#172178'}/>
            <View style={styles.logoView}>
            <Image
                style={styles.logo}
                source={logo}
            />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {navigation.navigate('PaginaLogin')}}>
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#172178'
    },
    logoView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    logo: {
        width: 250,
        height: 120
    },
    buttonView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#9a031e',
        width: 150,
        height: 65,
        shadowColor: "#000",
        borderWidth: 2,
        borderColor: '#ffdd55',
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
        fontSize: 24,
        color: '#ffffff',
    }
})

export default Inicio