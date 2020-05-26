import 'react-native-gesture-handler'
import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Inicio from './src/views/Inicio'
import Login from './src/views/Login'

const Stack = createStackNavigator()

class App extends React.Component{

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio}
            options={{title: ' ', headerStyle: {
              backgroundColor: 'blue',
              borderBottomColor: 'blue',
              borderBottomWidth: 1
            }}}
          />
          <Stack.Screen name='Login' component={Login}
          
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App