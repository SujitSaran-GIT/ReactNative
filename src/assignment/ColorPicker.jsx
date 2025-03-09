import { useState } from "react"
import { Button, StyleSheet, View } from "react-native"
import ChangeBackgroundColor from "./ChangeBackgroundColor";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    colorContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
        width: "80%"
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%"
    }
})
const FillColor = () => {
    const [circleColors, setCircleColors] = useState(["black", "black", "black", "black"]);

    // Function to update specific circle color
    const updateColor = (index, color) => {
        const newColors = [...circleColors];
        newColors[index] = color;
        setCircleColors(newColors);
    };

    return (
        <View style={styles.container}>
            <View style={styles.colorContainer}>
                {circleColors.map((color, index) => (
                    <View key={index} style={[styles.circle, { backgroundColor: color }]} />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Red" onPress={() => updateColor(0, "red")} />
                <Button title="Blue" onPress={() => updateColor(1, "blue")} />
                <Button title="Green" onPress={() => updateColor(2, "green")} />
                <Button title="Yellow" onPress={() => updateColor(3, "yellow")} />
                <Button title="Reset" onPress={() => setCircleColors(["black", "black", "black", "black"])} />
            </View>
        </View>
    );
};

const ColorPicker = () => {
    const [color, setColor] = useState("black")
    return (
        <View style={{gap : 10}}>
            <View style={styles.container}>
                <View style={styles.colorContainer}>
                    <View style={[styles.circle, { backgroundColor: color }]}></View>
                    <View style={[styles.circle, { backgroundColor: color }]}></View>
                    <View style={[styles.circle, { backgroundColor: color }]}></View>
                    <View style={[styles.circle, { backgroundColor: color }]}></View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Red" onPress={() => setColor("red")} />
                    <Button title="Blue" onPress={() => setColor("blue")} />
                    <Button title="Green" onPress={() => setColor("green")} />
                    <Button title="Yellow" onPress={() => setColor("yellow")} />
                    <Button title="Reset" onPress={() => setColor("black")} />
                </View>
            </View>
            {/* <FillColor/> */}
            <ChangeBackgroundColor/>
        </View>
    )
}
export default ColorPicker