import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'

const RadioItem = ({value}) => {
  return (
    <View style={styles.contenedorRadio}>
      <Text style={styles.texto}>{value}</Text>
    </View>
  )
}

export default RadioItem

const styles = StyleSheet.create({
  contenedorRadio: {
    backgroundColor: COLORS.secondary,
    width: 50,
    height: 50,
    borderRadius: '50%',
    justifyContent: 'center'
  },
  texto: {
    color: COLORS.white,
    fontSize: 28
  }
})
