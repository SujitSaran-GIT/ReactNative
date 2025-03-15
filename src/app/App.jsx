import { ScrollView, Text, View } from "react-native"
// import SecondAssignment from "../assignment/SecondAssignment"
// import Expression from "./Expression"
// import ThirdAssignment from "../assignment/ThirdAssignment"
// import Styles from "./Styles"
// import { SafeAreaView } from "react-native-safe-area-context"
// import Index from "./Index"
// import DataList from "./DataList"
// import ArrayOfObjects from "./ArrayOfObjects"
// import FourthAssignment from "../assignment/FourthAssignment"
// import Props from "./Props"
// import FifthAssignment from "../assignment/FifthAssignment"
// import ConditionalRendering from "./ConditionalRendering"
// import UseStateHook from "./UseStateHook"
// import ChangeBackgroundColor from "../assignment/ChangeBackgroundColor"
// import ToDoList from "../assignment/ToDoList"
// import UseEffectHook from "./UseEffectHook"

import CustomHookChallenge from "../assignment/CustomHookChallenge"
import MainComponent from "../PropDrilling/MainComponent"
import MainTailwind from "../Tailwindcss/MainTailwind"

import '../../global.css'
// import MainRouter from "../ExpoRouter/MainRouter"
import { Link } from "expo-router"
// import { View } from "react-native"




// import UseReducerHook from "./UseReducerHook"


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
        // <ConditionalRendering/>
        // <UseStateHook/>
        // <ChangeBackgroundColor/>
        // <ToDoList/>
        // <UseEffectHook/>
        // <UseReducerHook/>
        // <MainComponent/>
        // <CustomHookChallenge/>
        // <MainTailwind/>
        <View>
            <Text>Welcome to the Main Screen</Text>
            <Link href="/Home">Go to Home</Link>
            <Link href="/Contact">Go to Contact</Link>
            <Link href="/About">Go to About</Link>
        </View>
        // </SafeAreaView>
    )
}

export default App