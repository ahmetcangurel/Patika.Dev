import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

//Components
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

const App = () => {
  const [taskList, setTaskList] = useState([
    { text: 'Learn React Native', isCompleted: false },
    { text: 'Learn React', isCompleted: false },
    { text: 'Learn Redux', isCompleted: false },
  ])

  const [taskItem, setTaskItem] = useState({})

  const renderTaskItem = ({ item }) => <TaskItem item={item} />

  const inputText = (text) => setTaskItem(text)

  const addTask = () => {
    if (taskItem.length > 0) {
      setTaskList()
      console.log('denendi')
    } else {
      alert('Lütfen bir iş giriniz!')
    }
  }

  return (
    <View style={styles.container}>
      <Header count={taskList} />
      <FlatList
        data={taskList}
        renderItem={renderTaskItem}
        keyExtractor={item => item.text}
      />
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
  }
})