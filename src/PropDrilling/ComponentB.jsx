import { View } from "react-native"
import ComponentC from "./ComponentC"

const ComponentB = ({username}) => {
    return(
        <View>
            <ComponentC username={username}/>
        </View>
    )
}
export default ComponentB