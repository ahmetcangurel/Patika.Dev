import React from 'react'
import { TextInput } from 'react-native'
import styles from './SearchInput.Style'

const SearchInput = () => {
  return (
    <TextInput
      placeholder='Ara..'
      style={styles.input}
    />
  )
}

export default SearchInput