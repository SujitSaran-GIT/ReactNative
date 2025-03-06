import { Text, View } from "react-native"

const Expression = () => {
    const myname = "SUJIT SARAN"
    const multiply = (a,b) => a * b
    const friends = ["SUJIT","SUMIT","BIRAJA","MANISHA"]
    const mydetails = {
        name : "SUJIT SARAN",
        age : 23,
        course : "MCA"
    }
    // Object destructuring
    const {name,age,course} = mydetails
    return (
        <View>
            <Text>My name is {myname}</Text>
            <Text>2+2={2+2}</Text>
            <Text>2*2:{multiply(2,2)}</Text>
            {
                friends.map((friend,index) => {
                    return(
                        <Text key={index}>{friend}</Text>
                    )
                })
            }
            <Text>{mydetails.name}</Text>
            <Text>{mydetails.age}</Text>
            <Text>{mydetails.course}</Text>

            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{course}</Text>

        </View>
    )
}
export default Expression