import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import JobCard from '../../components/JobCard/JobCard'
import styles from './Favorites.style'

const Favorites = ({ navigation }) => {
    const favData = useSelector(state => state.favorites)
    const renderJobs = ({ item }) => <JobCard button item={item} onPress={() => navigation.navigate('Detail', { item })} />

    return (
        <View>
            <FlatList
                data={favData}
                renderItem={renderJobs}
            />
        </View>
    )
}

export default Favorites