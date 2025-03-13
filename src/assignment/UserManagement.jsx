import { useReducer, useState } from "react";
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, StyleSheet, Modal } from "react-native";

const userInitialState = { users: [] };

const userReducer = (userState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                users: [...userState.users, { id: Date.now().toString(), name: action.payload.name, age: action.payload.age }]
            };

        case "EDIT_USER":
            return {
                users: userState.users.map(user =>
                    user.id === action.payload.id ? { ...user, name: action.payload.name, age: action.payload.age } : user
                )
            };

        case "REMOVE_USER":
            return {
                users: userState.users.filter(user => user.id !== action.payload)
            };

        default:
            return userState;
    }
};

const UserManagement = () => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");

    // Edit modal states
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");

    const handleAddUser = () => {
        if (inputName.trim() === "" || inputAge.trim() === "") return;
        userDispatch({ type: "ADD_USER", payload: { name: inputName, age: inputAge } });
        setInputName("");
        setInputAge("");
    };

    const handleEditUser = (user) => {
        setEditId(user.id);
        setEditName(user.name);
        setEditAge(user.age);
        setEditModalVisible(true);
    };

    const handleSaveEdit = () => {
        if (editName.trim() === "" || editAge.trim() === "") return;
        userDispatch({ type: "EDIT_USER", payload: { id: editId, name: editName, age: editAge } });
        setEditModalVisible(false);
    };

    const handleRemoveUser = (id) => {
        userDispatch({ type: "REMOVE_USER", payload: id });
    };

    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.name} (Age: {item.age})</Text>
            <TouchableOpacity onPress={() => handleEditUser(item)}>
                <Text style={{ color: "blue", marginRight: 10 }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveUser(item.id)}>
                <Text style={{ color: "red" }}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <TextInput placeholder="Enter name" value={inputName} onChangeText={setInputName} style={styles.input} />
            <TextInput placeholder="Enter Age" value={inputAge} onChangeText={setInputAge} keyboardType="numeric" style={styles.input} />
            <Button title="Add Profile" onPress={handleAddUser} />

            <FlatList data={userState.users} keyExtractor={(item) => item.id} renderItem={renderItem} />

            {/* Edit Modal */}
            <Modal visible={editModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Edit User</Text>
                        <TextInput placeholder="Enter new name" value={editName} onChangeText={setEditName} style={styles.input} />
                        <TextInput placeholder="Enter new age" value={editAge} onChangeText={setEditAge} keyboardType="numeric" style={styles.input} />
                        <Button title="Save Changes" onPress={handleSaveEdit} />
                        <Button title="Cancel" onPress={() => setEditModalVisible(false)} color="red" />
                    </View>
                </View>
            </Modal>
        </View>
    );
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: 300,
    },
});

export default UserManagement;
