import { Text, View } from "react-native"
import User from "./User"
import FirstAssignment from "../assignment/FirstAssignment"
import ImageComponent from "./ImageComponent"

const Index = () => {
    return (
        <View>
            <Text>Hello! My name is Sumit Saran</Text>
            <Text>Hello! My name is Sujit Saran</Text>
            <User myname="Biraja" age={20} course="MCA"/>
            <Text>Sum Of 2 + 2 is: {2+2}</Text>
            <FirstAssignment/>
            <Text className="text-cyan-800">Hello World</Text>
            <ImageComponent/>
        </View>
    )
}
export default Index