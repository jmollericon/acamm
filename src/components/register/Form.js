import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Formik } from 'formik'

// constants
import { COLORS, SIZES } from '../../../constants'

// components
import TextInputApp from './TextInputApp'

const Form = () => {
  const searchSubscriber = (values) => {
    const subscriber = null
    if (subscriber) {
      console.log('creating subscriber', values)
    } else {
      alert(
        'La cédula de identidad y el número de documento ingresado no se encuentran registrados, intente con otros datos.'
      )
    }
  }
  return (
      <View style={styles.contenedor}>
        <Formik
            initialValues={{ document_number: '', subscriber_number: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.document_number) {
                errors.document_number = 'Este campo es requerido.'
              }
              if (!values.subscriber_number) {
                errors.subscriber_number = 'Este campo es requerido.'
              }
              return errors
            }}
            onSubmit={(values) => searchSubscriber(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.contenedorFormulario}>
                <View style={styles.campoEntrada}>
                  <Text style={styles.texto}>Nuevo abonado</Text>
                  <TextInputApp
                    placeholder="Nombre"
                    handleChange={handleChange('document_number')}
                    handleBlur={handleBlur('document_number')}
                    values={values.document_number}
                    errors={errors.document_number}
                    touched={touched.document_number}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.campoEntrada}>
                  <Text style={styles.texto}>Selecciona tu genero</Text>
                  
                </View>
                <View style={styles.campoEntrada}>
                  <Text style={styles.texto}>Selecciona tu edad</Text>
                  
                </View>
                <View style={styles.campoEntrada}>
                  <Text style={styles.texto}>Ingrese el nombre de tu mascota</Text>
                  <TextInputApp
                    placeholder="Nombre mascota"
                    handleChange={handleChange('subscriber_number')}
                    handleBlur={handleBlur('subscriber_number')}
                    values={values.subscriber_number}
                    errors={errors.subscriber_number}
                    touched={touched.subscriber_number}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.contenedorBoton}>
                  <TouchableHighlight style={styles.boton} onPress={handleSubmit}>
                    <Text style={styles.textoBoton}>REGISTRARSE</Text>
                  </TouchableHighlight>

                </View>
              </View>
            )}
          </Formik>
        </View>
    )
}
export default Form

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    paddingLeft: 30,
    paddingRight: 30,
  },
  campoEntrada: {
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: 14
  },
  texto: {
    color: COLORS.darkgray,
    marginBottom: 11
  },
  contenedorFormulario: {
    width: '100%',
    // alignItems: 'center'
    textAlign: 'center',
    alignContent: 'center'
  },
  contenedorBoton: {
    alignItems: 'center'
  },
  boton: {
    backgroundColor: COLORS.primary,
    width: 176,
    height: 44,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textoBoton: {
    color: COLORS.white,
    fontSize: 24,
  }
})
