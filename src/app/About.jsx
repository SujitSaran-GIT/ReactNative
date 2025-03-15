import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const About = () => {
  return (
    <View>
      <Text>About Screen</Text>
      <Link href="/users/10">Go to users screen</Link>
    </View>
  )
}

export default About
