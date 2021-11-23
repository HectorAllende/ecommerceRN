import React from 'react'
import { Text, View,StyleSheet, Button  } from 'react-native'


export const Nosotros = ({navigation}) => {

    const irInicio=()=>{
        navigation.goBack()
    }

    return (
        <View style={styles.contenedor}>
            <Text>Nosotros</Text>
            
            <Button
                title="Ir a Inicio"
                onPress={()=>irInicio()}
                style={styles.btn}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        color:'#09a94a'
    }
})
