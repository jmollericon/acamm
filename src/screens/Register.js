import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

import Form from '../components/register/Form'

const Register = () => {
  return (
    <View style={{ flex:1, backgroundColor: COLORS.white }}>
      <View style={styles.contenedorTitulo}>
        <Text style={styles.titulo}>Registrarse</Text>
      </View>
      <Form />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  contenedorTitulo: {
    paddingTop: 60,
    paddingBottom: 10,
    textAlign: 'center'
  },
  titulo: {
    ...FONTS.body1,
    color: COLORS.black,
  }
})
