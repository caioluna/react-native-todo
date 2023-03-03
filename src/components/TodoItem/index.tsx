import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from '../../themes/theme';
import { TodoListAreaProps } from '../TodoListArea';
import { TodoListItemProps } from '../../screens/Home';

interface TodoItemProps extends TodoListItemProps {
  todoListItems: TodoListItemProps[],
  setTodoListItems: (todoListItems: TodoListItemProps[]) => void
}

export function TodoItem(props: TodoItemProps) {
  const iconChecked = props.isChecked ? 'check' : undefined

  const handleCheckItem = (id: string) => {
    const changedTodoItem = props.todoListItems.map((todo: TodoListItemProps) => todo.id === id ?
      {
        ...todo,
        isChecked: !todo.isChecked
      } : todo)

    props.setTodoListItems(changedTodoItem)
  }

  const handleDeleteTodoItem = (id: string) => {
    const filteredList = props.todoListItems.filter((todo: TodoListItemProps) => todo.id !== id)
    props.setTodoListItems(filteredList)
  }

  return (
    <View style={styles.container}>

      <Pressable
        onPress={() => handleCheckItem(props.id)}
        style={styles.pressable}
      >
        <View style={props.isChecked && styles.pressed}>
          {
            props.isChecked ? (
              <MaterialCommunityIcons
                name={iconChecked}
                size={12}
                color={colors.gray100}
              />
            ) : (
              <View style={styles.empty} />
            )
          }
        </View>
      </Pressable>

      <Text style={props.isChecked ? styles.textStriken : styles.text}>{props.text}</Text>

      <TouchableOpacity onPress={() => handleDeleteTodoItem(props.id)}>
        <Image
          source={require('../../../assets/trash.png')}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  )
}