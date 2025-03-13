import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import useForm from '../hooks/useForm'

const CustomHookChallenge = () => {
    const nameInput = useForm('')
    const emailInput = useForm('')

    const handleSubmit = () => {
        console.log("Name:",nameInput.value)
        console.log("Email:",emailInput.value)
    }
    return (
        <View>
            <Text style={styles.label}>Name: </Text>
            <TextInput style={styles.input} value={nameInput.value} onChangeText={nameInput.onChange} placeholder='Enter your name' />

            <Text style={styles.label}>Email: </Text>
            <TextInput style={styles.input}
                value={emailInput.value}
                onChangeText={emailInput.onChange}
                placeholder="Enter your email"
                keyboardType="email-address" />

            <Button title='Submit' onPress={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default CustomHookChallenge
