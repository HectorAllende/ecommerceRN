import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export const Carrito = ({ navigation, route }) => {

    const { tipo, precio } = route.params

    const irProductos = () => {
        navigation.navigate('Productos')
    }

    const irInicio = () => {
        navigation.navigate('Inicio')
    }


    return (

        <View style={styles.contenedor}>
            <Text>Carrito</Text>

            <Text>{tipo}: ${precio}</Text>

            <Button
                title='ir a Productos'
                onPress={() => irProductos()}
            />
            <Button
                title="Inicio"
                onPress={() => irInicio()}
            />



        </View>


    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
