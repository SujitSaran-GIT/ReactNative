import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
      <Link href="/App">Go to Home</Link>
      <Text>Home screen</Text>
    </View>
  )
}

export default Home
