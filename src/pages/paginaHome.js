import React from 'react'
import { Text, View, Button, Image } from 'react-native'

const PaginaHome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
            <View style={styles.containerButton}>
                <Button title='Jogar' onPress={() => navigation.navigate('PaginaPerfil')}/>
            
                <Button title='Ranking' onPress={() => navigation.navigate('PaginaPerfil')}/>
        
                <Button title='Meu Perfil' onPress={() => navigation.navigate('PaginaPerfil')} />
            </View>
        </View> 
    )

}


const styles = {
    container: {
        alignItems: 'center',
        flex: 1
    },
    containerButton: {
        flex: 2,
        justifyContent: 'space-around'
    },
    logo: {
        margin: 10,
        flex: 1,
        width: 400,
    }
}
export default PaginaHome;