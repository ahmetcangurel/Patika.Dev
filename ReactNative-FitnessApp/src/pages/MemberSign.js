import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'

const MemberSign = ({ navigation }) => {

    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userHometown, setUserHometown] = useState(null)

    const handleSubmit = () => {
        if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
            Alert.alert('Eksik Alan.', 'Lütfen tüm alanları doldurun.')
            return
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown
        }
        navigation.navigate('MemberResult', { user })
    }

    return (
        <View>
            <Input label='Ad' placeholder='Üye Adını Giriniz' onChangeText={setUserName} />
            <Input label='Soyad' placeholder='Üye Soyadını Giriniz' onChangeText={setUserSurname} />
            <Input label='Yaş' placeholder='Üye Yaşını Giriniz' onChangeText={setUserAge} />
            <Input label='Mail' placeholder='Üye Mailini Giriniz' onChangeText={setUserMail} />
            <Input label='Şehir' placeholder='Üye Şehrini Giriniz' onChangeText={setUserHometown} />

            <Button text='Kaydı Tamamla' onPress={handleSubmit} />
        </View>
    )
}

export default MemberSign