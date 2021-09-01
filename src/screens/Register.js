import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Register = () => {
  return (
    <View style={{ flex:1, backgroundColor: COLORS.white }}>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.titulo}>Registrarse</Text>
      </View>
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  contenedorTitulo: {
    paddingTop: 50,
    paddingBottom: 10,
    textAlign: 'center'
  },
  titulo: {
    ...FONTS.body1,
    color: COLORS.black,
  }
})
