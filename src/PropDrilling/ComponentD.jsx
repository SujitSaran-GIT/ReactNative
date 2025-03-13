import { useContext } from "react"
import { Text, View } from "react-native"
import { UserContext } from "../context/UserContext"

const ComponentD = () => {

    const context = useContext(UserContext)

    if (!context) {
        throw new Error("ComponentD Must be within the UserProvider")
    }

    const {user,setUser} = context
    return(
        <View>
            <Text>Hello</Text>
            <Text>{user}</Text>
        </View>
    )
}
export default ComponentD