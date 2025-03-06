import { Text, View } from "react-native"
import Test from "../app/Test"

const UserDetails = ({ name, age, course, interest }) => {
    return (
        <View>
            <Text>My name is {name}</Text>
            <Text>I am {age} years old</Text>
            <Text>I am now persuing {course}</Text>
            <Text>I love in {interest}</Text>
        </View>
    )
}

const FirstAssignment = () => {
    return (
        <View>
            <UserDetails name="Sujit" age={23} course="MCA" interest="SEX" />
            <Test />
        </View>
    )
}
export default FirstAssignment