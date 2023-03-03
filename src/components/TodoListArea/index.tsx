import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { fonts } from '../../themes/theme'
import { TodoItem } from '../TodoItem'
import { TodoListItemProps } from '../../screens/Home'

export type TodoListAreaProps = {
  todoListItems: TodoListItemProps[],
  setTodoListItems: (todoListItems: TodoListItemProps[]) => void
}

export function TodoListArea(props: TodoListAreaProps) {
  const [createdCounter, setCreatedCounter] = useState(0)
  const [concludedCounter, setConcludedCounter] = useState(0)

  useEffect(() => {
    if (props.todoListItems) {
      setCreatedCounter(props.todoListItems.length)
    } else {
      setCreatedCounter(0)
    }
  }, [props.todoListItems])

  useEffect(() => {
    if (props.todoListItems) {
      const concluded = props.todoListItems.filter((todo: TodoListItemProps) => todo.isChecked === true)
      setConcludedCounter(concluded.length)
    } else {
      setConcludedCounter(0)
    }
  }, [props.todoListItems])

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>

        <View style={styles.statusWrapper}>
          <Text style={styles.created}>
            Created
          </Text>

          <View style={styles.counterContainer}>
            <Text style={styles.text}>{createdCounter}</Text>
          </View>
        </View>

        <View style={styles.statusWrapper}>
          <Text style={styles.concluded}>
            Concluded
          </Text>

          <View style={styles.counterContainer}>
            <Text style={styles.text}>{concludedCounter}</Text>
          </View>
        </View>

      </View>

      <FlatList
        style={{
          width: '100%',
          paddingHorizontal: 24,
          paddingTop: 20
        }}
        data={props.todoListItems}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        scrollEnabled={props.todoListItems.length > 0}
        ListEmptyComponent={() => (
          <View style={styles.clipboardContainer}>
            <View style={styles.divider} />
            <Image
              source={require('../../../assets/clipboard.png')}
              style={styles.clipboard}
            />

            <Text
              style={[styles.clipboardText, {
                marginTop: 16,
                marginBottom: 3,
                fontFamily: fonts.bold
              }]}>
              You don't have a task registered</Text>
            <Text
              style={styles.clipboardText}>
              Insert new tasks and manage your to-dos</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            isChecked={item.isChecked}
            setTodoListItems={props.setTodoListItems}
            todoListItems={props.todoListItems}
          />
        )}
      />

    </View>
  )
}