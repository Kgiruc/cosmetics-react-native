import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState([
    { name: "lipa", id: '1' },
    { name: "czesc", id: '2' },
    { name: "sukad", id: '3' },
    { name: "swolocz", id: '4' },
    { name: "swolocz", id: '5' },
    { name: "swolocz", id: '6' },
    { name: "swolocz", id: '7' },
  ]);

  function pressHandler(id) {
    console.log(id)
    setName((prevName) => {
      return prevName.filter(name => name.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "purple",
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
