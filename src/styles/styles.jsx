import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productContainer : {
        flex : 1,
        alignItems : "center",
        padding : 10,
        marginBottom : 10,
        backgroundColor : "#fff",
        borderRadius : 10,
        shadowColor : "#000",
        shadowOffset : {height : 2,width : 0},
        shadowOpacity : 0.1,
        shadowRadius : 5,
        elevation : 5
    },
    image : {
        width : 200,
        height : 200,
        borderRadius : 10
    },
    name : {
        fontSize : 16,
        color : "#888",
        marginTop : 5
    },
    price : {
        fontSize : 16,
        color : "#000",
        marginTop : 5
    },
    rating : {
        fontSize : 16,
        color : "#888",
        marginTop : 5
    }
})