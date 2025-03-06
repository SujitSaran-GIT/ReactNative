import { StyleSheet, Text, View } from "react-native"

const Styles = () => {

    // Internal css
    const styles = StyleSheet.create(
        {
            textStyle : {
                color : "crimson",
                backgroundColor : "yellow",
                fontSize : 20,
                margin : 20,
                padding : 10
            }
        }
    )

    return (
        <View style={{display : "flex", flexDirection: "column",justifyContent : "center", alignItems : "center"}}>
            {/* Previously we are done so many styling using inline styles you can refer there */}

            {/* Creating four boxes using inline style */}
            <View style={{display : "flex", flexDirection : "row"}}>
                <View style={{ backgroundColor: "red", width: 100, height: 100, margin: 20 }}></View>
                <View style={{ backgroundColor: "green", width: 100, height: 100, margin: 20 }}></View>
            </View>
            <View style={{display : "flex", flexDirection : "row"}}>
                <View style={{ backgroundColor: "blue", width: 100, height: 100, margin: 20 }}></View>
                <View style={{ backgroundColor: "pink", width: 100, height: 100, margin: 20 }}></View>
            </View>

            {/* Its completly fine, Inline style is not the great way to styling, Instead, of using inline style we use Internal style */}

            <Text style={styles.textStyle}>Sujit Saran</Text>
        </View>
    )
}
export default Styles