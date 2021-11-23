import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Carrito } from './views/Carrito'
import { Nosotros } from './views/Nosotros'
import { Productos } from './views/Productos'
import { Inicio } from './views/Inicio'

const Stack = createStackNavigator()


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor: '#09a94a'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}
      >

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            title:"Ecommerce VidaSana"
          }}
        />
        <Stack.Screen
          name="Nosotros"
          component={Nosotros}
          options={{
            title:"Conocenos"
          }}
        />
        <Stack.Screen
          name="Productos"
          component={Productos}
          options={{
            title:"Nuestros Productos"
          }}

        />
        <Stack.Screen
          name="Carrito"
          component={Carrito}
          options={({route})=>({
            title: route.params.cliente
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


