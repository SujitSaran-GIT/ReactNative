import { ScrollView, Text, View } from "react-native"
import SecondAssignment from "../assignment/SecondAssignment"
import Expression from "./Expression"
import ThirdAssignment from "../assignment/ThirdAssignment"
import Styles from "./Styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Index from "./Index"
import DataList from "./DataList"
import ArrayOfObjects from "./ArrayOfObjects"
import FourthAssignment from "../assignment/FourthAssignment"
import Props from "./Props"
import FifthAssignment from "../assignment/FifthAssignment"
import ConditionalRendering from "./ConditionalRendering"


const App = () => {
    return (
        // <SafeAreaView>
        //     <ScrollView nestedScrollEnabled={true}>
        //     <Index/> 
        //     <Text className="text-yellow-800">Hello</Text>
        //         <SecondAssignment />
        //         <Expression />
        //         <ThirdAssignment />
        //     <Styles/> 
        //     </ScrollView>
            // <DataList/>
            // <ArrayOfObjects/>
            // <FourthAssignment />
            // <Props/>
            // <FifthAssignment/>
            <ConditionalRendering/>
        // </SafeAreaView>
    )
}

export default App