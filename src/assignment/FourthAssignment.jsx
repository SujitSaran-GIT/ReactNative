import { FlatList, Image, Text, View } from "react-native";
import { details } from "../data/data";
import { styles } from "../styles/styles";

const FourthAssignment = () => {
    const renderItems = ({ item }) => {
        return (
            <View style={styles.productContainer}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.rating}>{item.ratings}</Text>
            </View>
        );
    };

    return (
        <View>
            <FlatList 
                data={details} 
                renderItem={renderItems} 
                keyExtractor={item => item.id.toString()} 
            />
        </View>
    );
};

export default FourthAssignment;
