import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MemberResult = ({ route }) => {
    console.log(route.params.user)

    const user = route.params.user

    return (
        <View>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>{user.userName}</Text>
            <Text style={styles.label}>{user.userSurname}</Text>
            <Text style={styles.label}>{user.userAge}</Text>
            <Text style={styles.label}>{user.userMail}</Text>
            <Text style={styles.label}>{user.userHometown}</Text>
        </View>
    )
}

export default MemberResult

const styles = StyleSheet.create({
    message: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 20,
        margin: 10,
    }
})