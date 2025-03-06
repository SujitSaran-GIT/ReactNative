import { Image, View } from "react-native"

const ImageComponent = () => {
    return(
        <View>
            <Image source={require("../assets/bgman.webp")}
            style={{width:200,height:200}}/>

            <Image source={{uri:"https://reactjs.org/logo-og.png"}} style={{height:200,width:200}}/>
        </View>
    )
}
export default ImageComponent