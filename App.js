import React from 'react'
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} >
          <Image style={styles.logo} source={require('./src/imgs/milhao.png')} />
          <View style={styles.caixaDeLogin}>
            <View><Text style={styles.textoEmail}>E-Mail </Text></View>
            <TextInput style={styles.entradaDeTexto}
              placeholder='  Seu e-mail'
            />
            <View><Text style={styles.textoSenha}>Senha </Text></View>
            <TextInput style={styles.entradaDeTexto}
              placeholder='  Senha'
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.botaoCadastrar}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.botaoCadastrar}>Esqueceu a Senha?</Text>
          </TouchableOpacity>
          <View>
          <TouchableOpacity>
            <Text Entrar></Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#172178',
    flex: 1,
  },
  logo: {
    flex: 0.2,
    width: 180,
    alignSelf: 'center',
    margin: 30
  },
  caixaDeLogin: {
    width: 320,
    flex: 0.4,
    backgroundColor: '#EEF431',
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: 'gold',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  entradaDeTexto: {
    width: '98%',
    height: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 2,
    backgroundColor: '#c4c4c4'
  },
  textoEmail: {
    paddingHorizontal: 6,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  textoSenha: {
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: 'bold'
  },
  botaoCadastrar: {
    textAlign: 'center',
    color: '#C8CE1A',
    marginTop: 7,
    fontSize: 20
  }
})