import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function derrota(premio) {
    return (
        <View>
            <Text style={styles.texto}> {
                premio == 0 ? <Text> Ops, você não ganhou nada </Text> :
                    <Text> Você errou ! {'\n'} Sua premiação foi: {'\n'} {premio} </Text>
            }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default derrota