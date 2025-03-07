import { FlatList, Image, Text, View } from "react-native"

import { productStyle } from "../styles/styles"
import { products } from "../data/data"


const ChildComponent = ({ 
    name,
    price,
    isFeatured,
    image,
    description
}) => {
    return (
        <View style={productStyle.productContainer}>
            <View style={productStyle.imageContainer}>
                <Image source={{ uri: image }} style={productStyle.productImage} />
            </View>
            <View style={productStyle.contentContainer}>
                <Text style={productStyle.productName}>{name}</Text>
                <Text style={productStyle.productPrice}>${price}</Text>
                {isFeatured && <Text style={productStyle.featuredTag}>Featured</Text>}
                <Text style={productStyle.productDescription}>{description}</Text>
            </View>
        </View>
    )
}



const FifthAssignment = () => {
    return (
        <View>
            <Text>Fifth Assignment</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ChildComponent
                        name={item.productName}
                        image={item.productImage}
                        price={item.productPrice}
                        description={item.productDescription}
                        isFeatured={item.isFeatured}
                    />
                )}
            />
        </View>
    )
}
export default FifthAssignment