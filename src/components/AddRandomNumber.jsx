import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { RandomNumberContext } from '../context/RandomNumberContext'

const AddRandomNumber = () => {
    const {addNumber} = useContext(RandomNumberContext)

    const handleAddNumber = () => {
        addNumber({
            id : Date.now(),
            name : "Number: " + Math.floor(Math.random() * 100)
        })
    }

  return (
    <View>
      <Button title='Add random number' onPress={handleAddNumber}/>
    </View>
  )
}

export default AddRandomNumber
