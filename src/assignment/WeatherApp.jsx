import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const WeatherApp = () => {
    const weatherData = {
        London : "25^c,Clear",
        Newwork : "23^c,Sunny",
        Paris : "21^c,Cloudy",
        Mumbai : "24^c,Sunny",
        Moscow : "26^c,Cloudy"
    }
    const [city,setCity] = useState('')
    const [weather,setWhether] = useState('')

    const getWhether = () => {
        setWhether(weatherData[city] || "No data available")
    }
    return(
        <View>
            <Text>Weather Application</Text>

            <TextInput placeholder="Enter city" value={city} onChangeText={setCity} style={styles.container}/>

            <Text></Text>

            <Button title="Get Weather" onPress={getWhether}/>

            {
                weather ? <Text>{weather}</Text> : <Text>Can't found the city {city}</Text>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : 20
    }
})
export default WeatherApp