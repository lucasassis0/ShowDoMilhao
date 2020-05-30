import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler'
const Alternativas = ({ alternativas, correta, notificaResposta }) => {


    const respostaCerta = alternativas[correta]
    const [modalVisible, setModalVisible] = useState(false);


    const alternativa = alternativas.map((alter, index) => {
        return (
            <View key={alter} style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Você está certo disso ? Posso perguntas ?</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={styles.openButton} onPress={()=> setModalVisible(!modalVisible)}>
                                    <Text style={{color: 'yellow', fontWeight: "bold"}}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.openButton, {...styles, marginLeft: 10}]} onPress={() => { notificaResposta(respostaCerta === alter, alter), setModalVisible(!modalVisible) }} >
                                    <Text style={{color: 'yellow', fontWeight: "bold"}}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View key={alter} style={styles.container}>
                    <TouchableOpacity style={styles.alternativas} onPress={() => setModalVisible(true)
                        // 
                    }>
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
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    openButton: {
        backgroundColor: "blue",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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

// const verificarRespota = () => {
//     const respostaCerta = alternativas[correta]
// }

// {/* <Overlay isVisible={true} onBackdropPress={toggleOverlay}>
// <Text style={{ height: 50, lineHeight: 50 }}>Voce está certo disso ? {respostaCerta}</Text>
// <Button title='Confirmar resposta !' onPress={() => { }} titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
// </Overlay> */}

// const RespostaErrada = () => {
//     return (
//     )
// const toggleOverlay = () => {
//     setVisible(!visible);
// // }
// const [visible, setVisible] = useState(false)
//         <Overlay isVisible={true} onBackdropPress={toggleOverlay}>
//             <Text style={{ height: 50, lineHeight: 50 }}>Voce está certo disso ? {respostaCerta}</Text>
//             <Button title='Confirmar resposta !' onPress={() => { }} titleStyle={{ color: '#FAFF00' }} type='outline' containerStyle={{ backgroundColor: "#B71B1B" }} buttonStyle={{ borderColor: '#000' }} />
//         </Overlay>
// }
export default Alternativas