import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'

import JobCard from '../../components/JobCard/JobCard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Home = ({ navigation }) => {
    const { data, error, loading } = useFetch(Config.API_JOBS_URL)

    const renderJobs = ({ item }) => <JobCard item={item} onPress={() => navigation.navigate('Detail', { item })} />

    if (loading) return <Loading />
    if (error) return <Error message={error} />
    return (
        <View>
            <FlatList
                data={data.results}
                renderItem={renderJobs}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Home