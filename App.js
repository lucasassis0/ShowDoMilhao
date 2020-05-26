import 'react-native-gesture-handler'
import * as React from 'react'
import {Text, View, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import PaginaLogin from './src/pages/paginaLogin'
import PaginaHome from './src/pages/paginaHome'
import PaginaJogo from './src/pages/paginaJogo'
import PaginaPerfil from './src/pages/paginaPerfil'
import PaginaCadastraJogador from './src/pages/paginaCadastraJogador'
import PaginaRanking from './src/pages/paginaRanking'
import PaginaFimDeJogo from './src/pages/paginaFimDeJogo'


const Stack = createStackNavigator()  

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaHome"> 
        <Stack.Screen name="Login" component={PaginaLogin} />
        <Stack.Screen name="PaginaHome" component={PaginaHome} />
        <Stack.Screen name="PaginaJogo" component={PaginaJogo} />
        <Stack.Screen name="PaginaPerfil" component={PaginaPerfil} />
        <Stack.Screen name="PaginaCadastraJodador" component={PaginaCadastraJogador} />
        <Stack.Screen name="PaginaRanking" component={PaginaRanking} />
        <Stack.Screen name="PaginaFimDeJogo" component={PaginaFimDeJogo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App