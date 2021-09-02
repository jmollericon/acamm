import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

// constants
import { COLORS, SIZES } from '../../../constants'

const TextInputApp = ({ placeholder, handleChange, handleBlur, values, errors, touched, keyboardType }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={values}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
      <Text style={styles.errorText}>{errors && touched && errors}</Text>
    </View>
  )
}

export default TextInputApp

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    borderRadius: SIZES.radius,
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding,
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    width: '100%'
    // color: 'red'
  },
  errorText: {
    color: COLORS.primary
  }
})