import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Component/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const [textInput, setTextInput] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  React.useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Add Todo please!!');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };

      setTodos([newTodo, ...todos]);
      setTextInput('');
    }
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('@storage_Key', stringifyTodos);
    } catch (e) {}
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');

      if (todos !== null) {
        setTodos(JSON.parse(todos));
      }
    } catch (e) {}
  };

  const Complete = todoId => {
    const newTodos = todos.map(item => {
      if (item.id === todoId) {
        return {...item, completed: true};
      }
      return item;
    });

    setTodos(newTodos);
  };
  const unComplete = todoId => {
    const newTodos = todos.map(item => {
      if (item.id === todoId) {
        return {...item, completed: false};
      }
      return item;
    });

    setTodos(newTodos);
  };

  const deleteTodo = todoId => {
    const newTodos = todos.filter(item => item.id !== todoId);
    Alert.alert('Error', 'Todo has been deleted!!');
    setTodos(newTodos);
  };

  const clearTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodos([]),
      },
      {
        text: 'No',
      },
    ]);
  };
  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemFlex}>
          <Text
            style={[
              styles.textItem,
              {textDecorationLine: todo?.completed ? 'line-through' : 'none'},
            ]}>
            {todo?.task}
          </Text>
        </View>

        {!todo?.completed && (
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => Complete(todo?.id)}>
            <Text style={styles.textChecklist}>✓</Text>
          </TouchableOpacity>
        )}
        {todo?.completed && (
          <TouchableOpacity
            style={styles.actionItem}
            onPress={() => unComplete(todo?.id)}>
            <Icon name="check-square" size={20} color="#F6AE45" solid />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
          <Icon name="trash" size={20} color="#F6AE45" solid />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <View style={styles.header}>
          <Text style={styles.text}>Todo List</Text>
          <TouchableOpacity style={{ paddingRight: 10 }} onPress={clearTodos}>
            <Text style={styles.clearButton}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={textInput}
            onChangeText={text => setTextInput(text)}
          />
        </View>

        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Text style={{color: 'white', fontSize: 20}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
