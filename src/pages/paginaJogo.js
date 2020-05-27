import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'

const PaginaJogo = () => {
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.pergunta}>
                <Text style={styles.perguntaTexto}>
                    Pergunta 1
               </Text>
            </View>
            <View style={{ flex: 2, }}>
                <TouchableOpacity style={styles.alternativas} onPress={()=> { setChecked(!checked)}}>
                    <CheckBox
                        // center
                        checkedColor={'green'}
                        uncheckedColor={'yellow'}
                        size={30}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checked}
                        onPress={() => { setChecked(!checked) }}
                    />
                    <Text style={styles.alternativasTexto}> Alternativa 1</Text>
                </TouchableOpacity>
                <View style={styles.alternativas}>
                    <CheckBox
                        center
                        
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checked1}
                        onPress={() => { setChecked1(!checked1) }}
                    />
                    <Text style={styles.alternativasTexto}> Alternativa 1</Text>
                </View>
                <View style={styles.alternativas}>
                    <CheckBox
                        center
                        
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checked2}
                        onPress={() => { setChecked2(!checked2) }}
                    />
                    <Text style={styles.alternativasTexto}> Alternativa 1</Text>
                </View>
                <View style={styles.alternativas}>
                    <CheckBox
                        center
                        
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checked3}
                        onPress={() => { setChecked3(!checked3) }}
                    />
                    <Text style={styles.alternativasTexto}> Alternativa 1</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ alignSelf: 'center' }}>
                    <Text>1000</Text>
                    <Text style={{ color: '#FAFF00' }}> Errar </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>3000</Text>
                    <Text style={{ color: '#FAFF00' }}>Acertar </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ backgroundColor: 'red', color: 'yellow' }}>2000</Text>
                    <Text style={{ color: '#FAFF00' }}>Parar </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Button title='Pular' />
                <Button title='Parar' />
            </View>


        </View>
    )
}

const styles = {
    container: {
        backgroundColor: '#172178',
        flex: 1,
        padding: 30
    },
    pergunta: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#B71B1B',
        height: 150,
        flex: 1,
    },
    perguntaTexto: {
        color: '#FAFF00',
        alignSelf: 'center'
    },
    alternativas: {
        marginTop: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    alternativasTexto: {
        backgroundColor: '#B71B1B',
        color: '#FAFF00',
        marginLeft: 15,
        borderWidth: 1,
        flex: 8,
        borderRadius: 30,
        textAlign: 'center',
        height: 32
    },
    avatar: {
        textAlign: 'center',
        flex: 0.5,
        backgroundColor: '#B71B1B',
        color: '#FAFF00',
        borderWidth: 1,
        borderRadius: 30,
        borderBottomColor: '#000',
    }
}
export default PaginaJogo