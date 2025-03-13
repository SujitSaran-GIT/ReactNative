import { useReducer, useState } from "react";
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import UserManagement from "../assignment/UserManagement";

// Counter Reducer
const initialCounterState = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error("Unhandled action type");
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <View>
            <Text>Count: {state.count}</Text>
            <Button title="Increment" onPress={() => dispatch({ type: "increment" })} />
            <Button title="Decrement" onPress={() => dispatch({ type: "decrement" })} />
        </View>
    );
};

// ToDo Reducer
const initialTodoState = { todos: [] };

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, { id: Date.now().toString(), text: action.payload }],
            };
        case "REMOVE_TODO":
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    todoItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    todoText: {
        fontSize: 16,
    },
    removeButton: {
        color: "red",
    },
});

const ToDo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialTodoState);
    const [inputValue, setInputValue] = useState("");

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: inputValue });
        setInputValue(""); // Clear input after adding
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", payload: id });
    };

    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <TextInput
                placeholder="Enter a todo item"
                value={inputValue}
                onChangeText={setInputValue}
                style={styles.input}
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
            <FlatList data={state.todos} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
    );
};

const UseReducerHook = () => {
    return (
        <View>
            {/* Uncomment Counter if needed */}
            {/* <Counter /> */}
            <ToDo />
            <UserManagement/>
        </View>
    );
};

export default UseReducerHook;
