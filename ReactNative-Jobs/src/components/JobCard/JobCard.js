import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import styles from './JobCard.style'
import Button from '../Button'

const JobCard = ({ item, onPress, button }) => {
    const dispatch = useDispatch()

    const handleRemoveFavorites = () => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: { item } })
        Alert.alert('Success', 'Removed from favorites')
    }

    return (
        <TouchableOpacity
            activeOpacity={.8}
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.company.name}</Text>
            <Text style={styles.location}>{item.locations[0].name}</Text>
            <Text style={styles.level}>{item.levels[0].name}</Text>
            {button && <Button onPress={handleRemoveFavorites} title='Remove' />}

        </TouchableOpacity>
    )
}

export default JobCard