import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Alert, Modal } from 'react-native'

const ModalAlternativas = ({notificaResposta, visible, respostaEscolhida, respostaCerta  }) => {
    const [modalVisible, setModalVisible] = useState(visible);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Você está certo disso ? Posso perguntas ?</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: 'yellow', fontWeight: "bold" }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.openButton, { ...styles, marginLeft: 10 }]}
                            onPress={() => {
                            notificaResposta(respostaCerta === respostaEscolhida), setModalVisible(!modalVisible)
                            }} >
                            <Text style={{ color: 'yellow', fontWeight: "bold" }}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
        const styles = {
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
            }
        }

export default ModalAlternativas;