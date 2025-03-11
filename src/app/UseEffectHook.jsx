import { useEffect, useState } from "react"
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native"
import axios from 'axios'

const DataFetching = () => {
    const [data, setData] = useState([])

    // useEffect to fetch the data
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")

            // console.log(response)
            // But one thing is that this is not the actual data, to get actual data, we ahave to convert it to JSON format

            const result = await response.json()
            setData(result)
            console.log(result)


        }
        try {
            fetchData()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <View>
            {/* Now rendering the data into my UI */}
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
                <View>
                    <Text>{item.id}</Text>
                    <Text>{item.title}</Text>
                </View>
            )} />
        </View>
    )
}

const SeafoodMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
                );
                const data = await response.json();
                setMeals(data.meals);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    if (loading) {
        return <Text style={styles.text}>Loading...</Text>;
    }

    if (error) {
        return <Text style={styles.text}>Error: {error}</Text>;
    }

    return (
        <View>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <Text style={styles.title}>{item.strMeal}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const PersonData = () => {
    const styles = StyleSheet.create({
        itemContainer: {
            flexDirection: "row",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            alignItems: "center",
        },
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
        },
        infoContainer: {
            flex: 1,
        },
        name: {
            fontSize: 16,
            fontWeight: "bold",
        },
        email: {
            fontSize: 14,
            color: "#666",
        },
        loadingText: {
            textAlign: "center",
            marginTop: 20,
        },
        errorText: {
            textAlign: "center",
            marginTop: 20,
            color: "red",
        },
    });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=100");
                setUsers(response.data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) {
        return <Text style={styles.loadingText}>Loading...</Text>;
    }

    if (error) {
        return <Text style={styles.errorText}>Error: {error}</Text>;
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
            </View>
        );
    };

    return (
        <View>
            <FlatList data={users} keyExtractor={(item) => item.login.uuid} renderItem={renderItem} />
        </View>
    );
};


const UseEffectHook = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.warn("UseEffect Called")
    }, [value])

    return (
        <View>
            {/* <Text>{value}</Text>
            <Button title="Increase" onPress={() => setValue(value + 1)} /> */}
            {/* <DataFetching /> */}
            {/* <SeafoodMeals /> */}
            <PersonData/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    text: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 18,
    },
});


export default UseEffectHook