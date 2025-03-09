import { useState } from "react"
import { Button, FlatList, Text, View } from "react-native"
import SixthAssignment from "../assignment/SixthAssignment"
import WeatherApp from "../assignment/WeatherApp"
import ColorPicker from "../assignment/ColorPicker"

const WithoutState = () => {
    let counter = 0

    const Increment = () => counter++

    return(
        <View>
            <Text>Count: {counter}</Text>
            <Button title="Increment" onPress={Increment}/>
        </View>
    )
}

const WithState = () => {
    const [counter,setCounter] = useState(0)

    const Increase = () => {
        setCounter(counter+1)
    }

    const Decrease = () => {
        setCounter(counter-1)
    }

    return(
        <View>
            <Text>Count : {counter}</Text>
            <Button title="Increment" onPress={Increase}/>
            <Button title="Decrement" onPress={Decrease} /> 
        </View>
    )
}

const UpdatingArray = () => {
    const [updates,setUpdates] = useState(["SUJIT","SUMIT","BIRAJA"])

    const updatedArray = ["MANISHA","SUBHAM","SATYAM"]

    const updateArray = () => {
        setUpdates(updatedArray)
    }

    // Add inside the list
    const addInsideList = () => {
        setUpdates([...updates,"JOHN CENA"])
    }

    // remove from the list 
    const removeFromList = () => {
        setUpdates(updates.filter((update) => update!="SUJIT"))
    }
    
    // Update a particular name
    const updateOne = () => {
        setUpdates(updates.map((update) => update === "SUJIT" ? "SUJIT SARAN" : "SUJIT"))
    }

    const [studentObject,setStudentObject] = useState({
        name : "SUJIT",
        age : 23,
        course : "MCA"
    }) 

    // Updating an Object 
    const updateObject = () => {
        setStudentObject({...studentObject,course : "MBA"})
    }
    return(
        <View>
            <FlatList data={updates} keyExtractor={(update => update)} renderItem={({item}) => <Text>{item}</Text>}/>

            <Button title="Update the array" onPress={updateArray}/>

            <Button title="Insert an element" onPress={addInsideList}/>

            <Button title="Remove an Element" onPress={removeFromList}/>

            <Button title="Update an element" onPress={updateOne}/>

            <Text>{studentObject.name}</Text>
            <Text>{studentObject.age}</Text>
            <Text>{studentObject.course}</Text>

            <Button title="Change the course" onPress={updateObject}/>
        </View>
    )
}

const SharingState = () => {

    const ComponentOne = ({count,onClickHandler}) => {
        return(
            <View>
                <Text>Component one</Text>
                <Text>{count}</Text>
                <Button title="Componet One" onPress={onClickHandler}/>
            </View>
        )
    }

    const ComponentTwo = ({count,onClickHandler}) => {
        return(
            <View>
                <Text>Component Two</Text>
                <Text>{count}</Text>
                <Button title="Component Two" onPress={onClickHandler}/>
            </View>
        )
    }

    const MainComponent = () => {
        const [count,setCount] = useState(0)

        return(
            <View>
                <ComponentOne count = {count} onClickHandler = {() => setCount(count+1)}/>
                <ComponentTwo count = {count} onClickHandler = {() => setCount(count-1)}/>
            </View>
        )
    }

    return(
        <View>
            <MainComponent/>
        </View>
    )
}

const UseStateHook = () => {
    return(
        <View>
            {/* <WithoutState/>
            <WithState/>
            <UpdatingArray/>
            <SharingState/>
            <SixthAssignment/> */}
            {/* <WeatherApp/> */}
            <ColorPicker/>
        </View>
    )
}
export default UseStateHook