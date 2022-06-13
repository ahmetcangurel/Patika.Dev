import React from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import HTMLView from 'react-native-htmlview'
import { useDispatch } from 'react-redux'

import Button from '../../components/Button'
import styles from './Detail.style'

const Detail = ({ route }) => {
    const { item } = route.params
    const dispatch = useDispatch()

    const handleAddFavorites = () => {
        dispatch({ type: 'ADD_FAVORITE', payload: { item } })
        Alert.alert('Success', 'Added to favorites')
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{item.name}</Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.infoLabel}>Locations:</Text>
                    <Text style={styles.infoValue}>{item.locations[0].name}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.infoLabel}>Job Level:</Text>
                    <Text style={styles.infoValue}>{item.levels[0].name}</Text>
                </View>
            </View>
            {/* Body Content */}
            <Text style={styles.bodyTitle}>Job Detail</Text>
            <View style={styles.bodyContainer}>
                <HTMLView
                    value={item.contents}
                    stylesheet={styles.htmlViewer}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Submit' icon='arrow-top-right-bold-outline' />
                <Button
                    title='Favorite Job'
                    icon='heart-plus'
                    onPress={handleAddFavorites}
                />
            </View>
        </ScrollView>
    )
}

export default Detail