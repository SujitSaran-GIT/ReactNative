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

export const productStyle = StyleSheet.create({
    productContainer: {
      flexDirection: "row",
      padding: 16,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
    },
    imageContainer: {
      flex: 1,
      marginRight: 16,
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    contentContainer: {
      flex: 2,
    },
    productName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 16,
      color: "#666",
      marginBottom: 4,
    },
    featuredTag: {
      backgroundColor: "#f0f0f0",
      padding: 4,
      borderRadius: 4,
      marginBottom: 8,
    },
    productDescription: {
      fontSize: 14,
    },
  });