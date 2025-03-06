import { Alert, Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ThirdAssignment = () => {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            margin: 20,
            padding: 20,
            borderRadius: 20,
            gap: 10,
            elevation: 10, // Adds shadow on Android
            shadowColor: "#000", // Adds shadow on iOS
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        },
        text: {
            padding: 5,
            backgroundColor: "black",
            color: "white",
            borderRadius: 10,
            textAlign: "center",
        },
        image: {
            height: 300,
            width: 300,
            borderRadius: 10,
        },
        view: {
            display: "flex",
            flexDirection: "column",
            gap: 10,
        },
        textview: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        button: {
            backgroundColor: "aqua",
            width: 120,
            height: 50,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
        },
        buttonText: {
            fontWeight: "bold",
        },
    });

    const price = 200000;
    const carname = "BMW";
    const ratings = 3.5;

    const addToCart = () => {
        Alert.alert(`${carname} is successfully added to the cart`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`$${price}`}</Text>
            <View style={styles.view}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" }}
                    style={styles.image}
                />
                <View style={styles.textview}>
                    <Text>{carname}</Text>
                    <Text>Ratings: {ratings}</Text>
                </View>
                <Text>Here is some random car description</Text>

                {/* Use TouchableOpacity instead of Text for button */}
                <TouchableOpacity style={styles.button} onPress={addToCart}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ThirdAssignment;
