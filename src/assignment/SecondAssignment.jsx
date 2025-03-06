import React from "react";
import { Alert, Button, Image, Text, View, StyleSheet } from "react-native";

const SecondAssignment = () => {
    const name = "SUJIT";
    const passion = "CODING";

    const handlePress = () => {
        Alert.alert(`Your name is ${name} and Your passion is ${passion}`);
    };

    return (
        <View>
            <View style={styles.card}>
                <Image source={require("../assets/bgman.webp")} style={styles.image} />
                <Text style={styles.title}>Your Name</Text>
                <Text style={styles.description}>My name is {name} and I love {passion}</Text>
                <Button title="Press Me" onPress={handlePress} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        elevation: 5, // For Android shadow
        shadowColor: "#000", // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        margin : 20
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default SecondAssignment;
