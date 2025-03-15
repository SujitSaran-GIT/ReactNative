import { Stack, Tabs } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="App" options={{
                headerTitle : "Home page",
                headerStyle : {
                    backgroundColor : "crimson"
                }
            }}/>
            <Stack.Screen name="users/[id]" options={{
                headerTitle : "Users ID",
                headerStyle : {
                    backgroundColor : "crimson"
                }
            }}/>
            <Stack.Screen name="About" options={{
                headerStyle : "About Page",
                headerStyle : {
                    backgroundColor : "red"
                }
            }}/>
            <Stack.Screen name="Contact" options={{
                headerTitle : "Contact Page",
                headerStyle : {
                    backgroundColor : "yellow"
                }
            }}/>
        </Stack>
        // <Tabs>
        //     <Tabs.Screen name="Home" options={{
        //         headerTitle : "Home Page",
        //         headerStyle : {
        //             backgroundColor : "red"
        //         }
        //     }}/>
        //     <Tabs.Screen name="About" options={{
        //         headerTitle : "About page",
        //         headerStyle : {
        //             backgroundColor : "green"
        //         }
        //     }}/>
        //     <Tabs.Screen name="Contact" options={{
        //         headerTitle : "Contact Page",
        //         headerStyle : {
        //             backgroundColor : "yellow"
        //         }
        //     }}/>
        // </Tabs>
    )
}

export default RootLayout