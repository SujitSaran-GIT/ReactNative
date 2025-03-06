import { Button, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const Test = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Main Title</Text>
            <Text>Here is some random text. It has nothing to do with this app</Text>
            
            <View style={{ 
                height: 100, 
                width: 100, 
                borderRadius: 50, 
                backgroundColor: "#ddd", 
                alignItems: "center", 
                justifyContent: "center", 
                marginVertical: 10 
            }}>
                <Text style={{ fontSize: 20 }}>{count}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
                <TouchableOpacity 
                    style={{
                        backgroundColor: "green",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                    }}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        backgroundColor: "red",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                    }}
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Test;
