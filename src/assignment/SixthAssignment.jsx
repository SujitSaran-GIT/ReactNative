import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { sixthstyle } from "../styles/styles"

const SixthAssignment = () => {
    const [state,setState] = useState(false)

    const handlePress = () => {
        setState(!state)
    }
    return(
        <View style={sixthstyle.container}>
            <Text style={sixthstyle.text}>
                {
                    state ? "on" : "off"
                }
            </Text>
            <View style={sixthstyle.boxContainer}>
                {
                    state ? <View style={sixthstyle.viewOne}></View> : <View style={sixthstyle.viewTwo}></View>
                }
            </View>
            <Button title="Press Me" onPress={handlePress}/>
        </View>
    )
}
export default SixthAssignment
