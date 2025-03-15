import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Users = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>Users: {id}</Text>
      <Link href="/About">Go to about page</Link>
    </View>
  )
}

export default Users
