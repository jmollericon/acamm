import React from 'react'
import { View, Text, Button } from 'react-native'

const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to HOME"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Welcome
