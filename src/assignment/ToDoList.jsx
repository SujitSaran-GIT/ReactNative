import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    todoItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    todoText: {
        fontSize: 18,
    },
});

const ToDoList = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const addTodo = () => {
        if (text.trim()) {
            setTodo([...todo, { id: Date.now().toString(), text: text }]); // ✅ Fix: Add text property
            setText("");
        }
    };

    const removeTodo = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    };

    const renderTodo = ({ item }) => (
        <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text> 
        </TouchableOpacity>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.header}>To-Do List</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Task"
                value={text}
                onChangeText={setText}
                onSubmitEditing={addTodo}
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={addTodo} />
            <FlatList data={todo} keyExtractor={(item) => item.id} renderItem={renderTodo} />
        </View>
    );
};

export default ToDoList;
