import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
  useEffect(() => {
    console.log('validando si existe registro')
    navigation.navigate('Register');
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  )
}

export default Home
