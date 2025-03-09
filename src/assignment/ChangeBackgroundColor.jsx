import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "white", // Ensuring text is visible on different backgrounds
    },
    colorContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    colorBox: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 30,
        borderWidth: 2,  // Add a border to improve visibility
        borderColor: "white",
    },
});

const ChangeBackgroundColor = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const [selectedColor, setSelectedColor] = useState("black");

    return (
        <View style={[styles.container, { backgroundColor: selectedColor, flex: 1, justifyContent: "center", alignItems: "center" }]}>
            <Text style={styles.title}>Pick a Color</Text>
            <View style={styles.colorContainer}>
                {colors.map((color) => (
                    <TouchableOpacity
                        key={color}
                        style={[styles.colorBox, { backgroundColor: color }]}
                        onPress={() => {
                            setSelectedColor(color);
                            // console.log("Selected Color:", color); // Debugging
                        }}
                    />
                ))}
            </View>
        </View>
    );
};

export default ChangeBackgroundColor;
