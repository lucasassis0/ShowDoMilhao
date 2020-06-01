import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native'
import ModalAlternativas from './modalAlternativas'
const Alternativas = ({ alternativas, correta, notificaResposta }) => {

    const respostaCerta = alternativas[correta]
    const [modalVisible, setModalVisible] = useState(false);
    const [respostaEscolhida, setResposta] = useState('')

    const visible = () => {
        setModalVisible(!modalVisible)
    }

    const alternativa = alternativas.map((alter, index) => {
        return (
            <View key={alter} style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.alternativas} onPress={() => {
                        visible(), setResposta(alter)
                    }}>
                        <Text style={styles.alternativasNum}>{`${index + 1}`}</Text>
                        <Text style={styles.alternativasTexto}> {alter}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    })

    return (
        <View style={{ flex: 2, }}>
            {
                alternativa
            }
            <ModalAlternativas
                notificaResposta={notificaResposta}
                visible={modalVisible}
                respostaEscolhida={respostaEscolhida}
                respostaCerta={respostaCerta}
                setModalVisible={visible}
                />
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
        fontSize: 16,
        backgroundColor: '#9a031e',
        color: '#ffffff',
        marginLeft: 15,
        borderWidth: 2,
        flex: 7,
        textAlign: 'center',
        height: 35,
        borderColor:'#ffdd55'
    },
    alternativasNum: {
        borderColor: "#ffdd55",
        borderWidth: 2,      
        lineHeight: 30,
        borderRadius: 40,       
        fontSize: 20,
        backgroundColor: '#9a031e',
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        height: 35,
        fontWeight: 'bold',
    },
}

export default Alternativas