import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Keyboard } from 'react-native'

//Components
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

const App = () => {
  const [taskList, setTaskList] = useState([
    { text: 'Learn React Native', isCompleted: false },
    { text: 'Learn React', isCompleted: true },
    { text: 'Learn Redux', isCompleted: false },
  ])

  const [taskItem, setTaskItem] = useState({})

  const inputText = (text) => setTaskItem(text)

  const addTask = () => {
    if (taskItem.length > 0) {
      setTaskList([...taskList, { text: taskItem, isCompleted: false }])
      Keyboard.dismiss()
    } else {
      alert('Lütfen bir iş giriniz!')
    }
  }

  const removeTask = (index) => {
    const newTaskList = [...taskList]
    newTaskList.splice(index, 1)
    setTaskList(newTaskList)
  }

  const completeTask = (index) => {
    const newTaskList = [...taskList]
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted
    setTaskList(newTaskList)
  }

  return (
    <View style={styles.container}>
      <Header count={taskList} />

      <View style={styles.taskContainer}>
        {taskList.map(item => (
          <TaskItem
            item={item}
            key={item.text}
            onLongPress={() => removeTask(taskList.indexOf(item))}
            onPress={() => completeTask(taskList.indexOf(item))}
          />
        ))
        }
      </View>

      <TaskInput
        onChangeText={inputText}
        onPress={addTask}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152238',
    paddingHorizontal: 20,
  },
  taskContainer: {
    flex: 1,
  }
})