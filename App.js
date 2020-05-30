import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from './src/pages/Inicio'
import PaginaHome from './src/pages/paginaHome'
import PaginaJogo from './src/pages/paginaJogo'
import PaginaPerfil from './src/pages/paginaPerfil'
import PaginaCadastraJogador from './src/pages/paginaCadastraJogador'
import PaginaRanking from './src/pages/paginaRanking'
import PaginaFimDeJogo from './src/pages/paginaFimDeJogo'
import PaginaDerrota from './src/pages/paginaDerrota'
import PaginaLogin from './src/pages/paginaLogin'


const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false }}> 
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="PaginaHome" component={PaginaHome} />
        <Stack.Screen name="PaginaLogin" component={PaginaLogin} />
        <Stack.Screen name="PaginaJogo" component={PaginaJogo} />
        <Stack.Screen name="PaginaPerfil" component={PaginaPerfil} />
        <Stack.Screen name="PaginaCadastraJodador" component={PaginaCadastraJogador} />
        <Stack.Screen name="PaginaRanking" component={PaginaRanking} />
        <Stack.Screen name="Parou" component={PaginaFimDeJogo} />
        <Stack.Screen name="Derrota" component={PaginaDerrota} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App