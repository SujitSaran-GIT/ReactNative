import React from 'react'
import { Button, Text, View } from 'react-native'
import { useCounterStore } from '../store/store'

const Zustand = () => {
    const count = useCounterStore((state) => state.count)
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
  return (
    <View>
      <Text>Count:{count}</Text>
      <Button title='Increment' onPress={increment}/>
      <Button title='Decrement' onPress={decrement}/>
    </View>
  )
}

export default Zustand
