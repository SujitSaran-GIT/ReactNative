import { FlatList, Text, View } from "react-native";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const PasswordChecker = ({ isValid }) => {
    return (
        <View>
            <View>
                {isValid ? <ValidPassword /> : <InvalidPassword />}
            </View>
        </View>
    );

    // Alternative If-Else Approach:
    // if (isValid) {
    //     return <ValidPassword />;
    // }
    // return <InvalidPassword />;
};

// && operator example

const grocery = ["Apple", "Banana", "Cherry", "Dalfry"];

const Grocery = () => {
    return (
        <View>
            <Text>Cart 🛒</Text>
            {grocery.length > 0 && (
                <Text>You have {grocery.length} items in your cart</Text>
            )}
            <FlatList
                data={grocery}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => index.toString()} // Added keyExtractor
            />
        </View>
    );
};

const ConditionalRendering = () => {
    return (
        <View>
            <PasswordChecker isValid={true} />
            <Grocery />
        </View>
    );
};

export default ConditionalRendering;
