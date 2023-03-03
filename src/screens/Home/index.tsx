import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import uuid from 'react-native-uuid'

import { TodoListArea } from '../../components/TodoListArea'

import { styles } from './styles'

export type TodoListItemProps = {
  id: string;
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [todoText, setTodoText] = useState<string>('')
  const [todoListItems, setTodoListItems] = useState<TodoListItemProps[]>([])

  const handleCreateNewTodo = () => {
    if (todoText === '') {
      return
    }

    const newTodoItem = {
      id: String(uuid.v4()),
      text: todoText,
      isChecked: false
    }

    setTodoListItems([...todoListItems, newTodoItem])
    setTodoText('')
  }

  return (
    <View>

      <View style={styles.container}>

        <Image
          source={require('../../../assets/todo-logo.png')}
          style={styles.logo}
        />

        <View style={styles.formWrapper}>

          <TextInput
            onChangeText={setTodoText}
            value={todoText}
            style={styles.textInput}
            placeholder='Add a new task'
            placeholderTextColor='#808080'
          />

          <TouchableOpacity
            onPress={handleCreateNewTodo}
            style={styles.buttonContainer}
          >
            <Image
              source={require('../../../assets/plus.png')}
              style={styles.image}
            />
          </TouchableOpacity>

        </View>

        <TodoListArea
          todoListItems={todoListItems}
          setTodoListItems={setTodoListItems}
        />
      </View>

    </View>
  )
}