import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
const Alternativas = ({ alternativas, correta }) => {
    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    const alternativa = alternativas.map(alter => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.alternativas} onPress={() => { Alert.alert('ola') }}>
                    <Text style={styles.alternativasNum}>{`${1}`}</Text>
                    <Text style={styles.alternativasTexto}> {alter}</Text>
                    {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <Text style={{}}>Ola </Text>
                    </Overlay> */}
                </TouchableOpacity>
            </View>
        )
    })

    return (
        <View style={{ flex: 2, }}>
            {
                alternativa
            }
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    alternativas: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'row',
        paddingBottom: 3,
    },
    alternativasTexto: {
        lineHeight: 30,
        borderRadius: 20,
        borderBottomColor: "#bbb",
        fontSize: 16,
        backgroundColor: '#B71B1B',
        color: '#FAFF00',
        marginLeft: 15,
        borderWidth: 2,
        borderColor: '#f6aa1c',
        flex: 7,
        textAlign: 'center',
        height: 35
    },
    alternativasNum: {
        borderBottomColor: "#bbb",
        borderWidth: 2,
        borderColor: '#f6aa1c',
        lineHeight: 30,
        borderRadius: 20,
        borderBottomColor: "#bbb",
        fontSize: 16,
        backgroundColor: '#B71B1B',
        color: '#FAFF00',
        flex: 1,
        textAlign: 'center',
        height: 35
    },
}

export default Alternativas