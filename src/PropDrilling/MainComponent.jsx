import { SafeAreaView, Text, View } from "react-native"
import ComponentA from "./ComponentA"
import { UserProvider } from "../context/UserContext"
import { NumberProvider } from "../context/RandomNumberContext"
import RandomNumber from "../components/RandomNumber"
import AddRandomNumber from "../components/AddRandomNumber"
import WithCostumHook from "../components/WithCostumHook"

const MainComponent = () => {
    
    return(
        <View>
            {/* <UserProvider>
                <ComponentA />
            </UserProvider> */}

            {/* <NumberProvider>
                <SafeAreaView>
                    <RandomNumber/>
                    <AddRandomNumber/>
                </SafeAreaView>
            </NumberProvider> */}

            <WithCostumHook/>
        </View>
    )
}
export default MainComponent