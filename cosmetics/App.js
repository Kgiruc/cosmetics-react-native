import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import Addtodo from './components/Addtodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "kup chleb", id: '1' },
    { text: "kup bydla", id: '2' },
    { text: "kup worek", id: '3' },
  ]);

  function pressHandler(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    })
  }

  function submitHandler(text) {
    setTodos((prevTodos) => {
      return [
        {text: text, id: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}  />
            )}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
