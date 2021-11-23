import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export const Inicio = ({ navigation }) => {

    const visitarNosotros = () => {
        navigation.navigate('Nosotros')
    }

    const visitarProductos = () => {
        navigation.navigate('Productos')
    }

    const visitarCarrito = () => {
        navigation.navigate('Carrito')
    }

    return (
        <View style={styles.contenedor}>
            <Text>Inicio</Text>

            <View>
                <Button
                    title="Ir a nosotros"
                    onPress={() => visitarNosotros()}
                />
                <Button
                    title="Ir a Productos"
                    onPress={() => visitarProductos()}
                />

         

            </View>

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
