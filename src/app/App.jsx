import { ScrollView, Text, View } from "react-native"
import SecondAssignment from "../assignment/SecondAssignment"
import Expression from "./Expression"
import ThirdAssignment from "../assignment/ThirdAssignment"
import Styles from "./Styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Index from "./Index"


const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
            <Index/> 
            <Text className="text-yellow-800">Hello</Text>
                <SecondAssignment />
                <Expression />
                <ThirdAssignment />
            <Styles/> 
            </ScrollView>
        </SafeAreaView>
    )
}
export default App