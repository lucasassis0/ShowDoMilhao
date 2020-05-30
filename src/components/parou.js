import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function parou(premio) {
    return (
        <View>
            <Text style={styles.texto}>Você parou, sua premiação é de: {'\n'}{premio}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#EBCD06',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default parou