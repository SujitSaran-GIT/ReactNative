import { Alert, Button, Image, Text, View } from "react-native"
import bgman from '../assets/bgman.webp'

const User = ({myname,age,course}) => {
    const handlePress = () => {
        return(
            Alert.alert(`Hello, ${myname}`)
        )
    }
    return(
        <View>
            <Text>My name is {myname}</Text>
            <Text>My age is {age}</Text>
            <Text>Persuing {course}</Text>
            <Image source={bgman} style={{ width: 100, height: 100 }}/>
            <Button title="Click Me" onPress={handlePress}/>
        </View>
    )
}
export default User