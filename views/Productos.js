import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export const Productos = ({ navigation }) => {

    const producto = {
        cliente: 'Carrito de Juan',
        tipo: 'Alimentos',
        precio: 800
    }

    const irCarrito = () => {
        navigation.navigate('Carrito', producto)
    }

    const irInicio = () => {
        navigation.navigate('Inicio')
    }
    return (
        <View style={styles.contenedor}>
            <Text>Productos</Text>
            <Button
                title="Ir al carrito"
                onPress={() => irCarrito()}
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
