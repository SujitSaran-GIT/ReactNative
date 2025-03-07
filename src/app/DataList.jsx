import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { items } from '../data/data';


const App = () => {

    const renderItem = ({ item }) => {
        return <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTitle}>{item.emoji}</Text>
        </View>
    }

    const header = () => (
        <Text style={styles.header}>My Favorite List</Text>

    );

    const footer = () => (
        <Text style={styles.footer}>Fruit, drinks and food.</Text>
    );

    const separator = () => (
        <View style={styles.separator} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={items}
                renderItem={renderItem}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                ItemSeparatorComponent={separator}
            />
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        flex: 0.5,
        fontSize: 16,
    },
    header: {
        fontSize: 32,
        marginVertical: 12,
        padding: 8,
    },
    footer: {
        padding: 8,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    },
    itemTitle: {
        fontSize: 24
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
    },
});


export default App;