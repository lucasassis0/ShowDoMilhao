import React from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'

const ModalAlternativas = ({ notificaResposta, visible, respostaEscolhida, respostaCerta, setModalVisible }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ fontSize: 22, textAlign: "center" , color:'#9a031e'}}>Você está certo disso? Posso perguntar ?</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible()}>
                            <Text style={{ color: '#ffdd55', fontWeight: "bold" }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.openButton, { ...styles, marginLeft: 10 }]}
                            onPress={() => {
                                notificaResposta(respostaCerta === respostaEscolhida), setModalVisible()
                            }} >
                            <Text style={{ fontSize: 15, color: '#ffdd55', fontWeight: "bold" }}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = {
    openButton: {
        backgroundColor: "#172178",
        borderRadius: 20,
        padding: 15,
        elevation: 15,
        marginTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ffffff",
        
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
}

export default ModalAlternativas;