import React from 'react'
import { FlatList, Text, View } from 'react-native'
import useFetch from '../hooks/useFetch'

const WithCostumHook = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <View>
      <FlatList 
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

export default WithCostumHook
