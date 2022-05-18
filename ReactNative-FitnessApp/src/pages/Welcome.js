import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const Welcome = ({ navigation }) => {

    const MemberSign = () => {
        navigation.navigate('MemberSign')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fitness App</Text>
            <Button text='Üye Ol' onPress={MemberSign} />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        fontweight: 'bold',
        margin: 10
    },
})