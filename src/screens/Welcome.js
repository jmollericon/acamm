import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { images } from '../../constants'

const Welcome = ({ navigation }) => {
  return (
    <View style={{backgroundColor: 'green'}}>
      <ImageBackground source={images.welcome} style={styles.imagen}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBoton}>INICIAR JUEGO</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  imagen: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: 640,
    backgroundColor: 'red',
  },
  boton: {
    position: 'relative',
    backgroundColor: COLORS.primary,
    width: 166,
    height: 105,
    borderRadius: 10,
    marginTop: 465,
    marginLeft: 30,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textoBoton: {
    color: COLORS.white,
    fontSize: 24,
  }
})
