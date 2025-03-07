import { Text, View } from "react-native"

const ParentComponent = () => {
    return (
        <View>
            <ChildComponent name = "SUJIT" age = {23} course = "MCA" hobby = "CODING" />
        </View>
    )
}

const ChildComponent = ({name,age,course,hobby}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{course}</Text>
            <Text>{hobby}</Text>
        </View>
    )
}

const Props = () => {
    return(
        <View>
            <ParentComponent/>
        </View>
    )
}
export default Props