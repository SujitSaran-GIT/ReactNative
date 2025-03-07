import { FlatList, Text, View } from "react-native"
import FourthAssignment from "../assignment/FourthAssignment"

const ArrayOfObjects = () => {
    const locations = [
        {
            id : 1,
            name : "London"
        },
        {
            id : 2,
            name : "Paris"
        },
        {
            id : 3,
            name : "Mumbai"
        },
        {
            id : 4,
            name : "Moscow"
        }
    ]
    return(
        <View>
            <FlatList keyExtractor={item => item.id.toString()} data={locations} renderItem={({item}) => <Text>{item.name}</Text>}/>
            
        </View>
    )
}
export default ArrayOfObjects