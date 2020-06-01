import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import BotaoPararPular from './botaoPularParar';

const Botoes = ({ pulo, setPulo, reiniciaJogo, navigation, indicePergunta, buttonPulo, setButtonPulo }) => {
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const parar = premio[indicePergunta] / 2
    const [modalVisible, setModalVisible] = useState(false);

    const onPressParar = () => {
        setModalVisible(true)
    }

    const parou = () => {
        reiniciaJogo()
        setButtonPulo(false)
        navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: 'PAROU' } })
    }

    const pular = () => {
        if (pulo < 3) {
            setPulo(pulo + 1)
            if (pulo == 2) {
                setButtonPulo(true)
            }
        }
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20 }}>
            <Button title={`PULAR ${pulo}/3`} onPress={pular} disabled={buttonPulo}  type='outline' buttonStyle={styles.styleButton} titleStyle={styles.buttonText}/>
            <Button title='PARAR' onPress={onPressParar} type='outline' buttonStyle={styles.styleButton} titleStyle={styles.buttonText} />
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize: 22, color:'#9a031e'}}>Quer mesmo parar o jogo ?</Text>
                        <Text style={{fontSize: 22, color:'#9a031e'}}>Voce vai ficar com: R${premio[indicePergunta] == 1000 ? 0 : parar} </Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={{ fontSize: 15, color: '#ffdd55', fontWeight: "bold" }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.openButton, { ...styles, marginLeft: 10 }]}
                                onPress={() => { setModalVisible(!modalVisible), parou()
                                }} >
                                <Text style={{ fontSize: 15, color: '#ffdd55', fontWeight: "bold" }}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = {
    styleButton: {
        borderColor: '#ffdd55',
        height: 40,
        width: 180,
        backgroundColor: '#9a031e',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: '#ffffff',
    },
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
export default Botoes;