import React from 'react'
import { View, Text, Button } from 'react-native'

const Second = ({ navigation, route }) => {
    return (
        <View>
            <Text>Second Hello</Text>
            <Button
                title="Go to Back"
                onPress={() => navigation.goBack()}
            />
            <Text>{route.params.userName}</Text>
        </View>
    )
}

export default Second