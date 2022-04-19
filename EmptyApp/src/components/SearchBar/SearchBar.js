import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './SearchBar.Styles'

const SearchBar = ({onSearch}) => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                onChangeText={onSearch}
            />
        </View>
    )
}

export default SearchBar