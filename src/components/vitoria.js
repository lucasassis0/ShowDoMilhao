import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground} from "react-native";
import milhao from '../images/milhao1.jpg'
function vitoria(premio) {
    return (
        <View>
            <Text style={styles.texto}>Você venceu sua premiação é de: {premio}</Text>
            <Image source = {milhao} style = {styles.milhao}/>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#EBCD06',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    milhao: {
        width: 160,
        height: 140,
        borderRadius: 15,
        alignSelf: 'center',
        
    }
})

export default vitoria