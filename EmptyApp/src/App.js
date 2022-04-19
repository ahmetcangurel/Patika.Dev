import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, Switch, StyleSheet } from 'react-native'
import SearchBar from './components/SearchBar'
import SongCard from './components/SongCard'
import song_data from './song_data'

const cafe_data = [
  { id: 0, name: 'cafe.exe', isFavorite: true },
  { id: 1, name: 'KafaKafe', isFavorite: false },
  { id: 2, name: 'BugG', isFavorite: false },
  { id: 3, name: 'Rock`n Code', isFavorite: true },
  { id: 4, name: 'do(drink)', isFavorite: false },
  { id: 5, name: 'esc', isFavorite: false },
]

const App = () => {

  const [list, setList] = useState(song_data)

  //SearchBar
  const handleSearch = (text) => {
    const filteredList = song_data.filter(song => {
      const searcedText = text.toLowerCase()
      const currentTitle = song.title.toLowerCase()

      return currentTitle.indexOf(searcedText) > -1
    })
    setList(filteredList)
  }

  //Flatlist components
  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeparator = () => <View style={styles.separator} />

  return (
    <View style={styles.container}>
      <SearchBar
        onSearch={handleSearch}
      />
      <FlatList
        data={list}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
      />
    </View >
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE',
  }
})