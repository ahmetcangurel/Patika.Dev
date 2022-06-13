import React from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from './Login.style'
import usePost from '../../hooks/usePost'

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost()
    const dispatch = useDispatch()

    const handleLogin = (values) => {
        post('https://fakestoreapi.com/auth/login', values)
    }

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Error', data.message)
        }
        else {
            dispatch({ type: 'SET_USER', payload: { user } })
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.bodyContainer}>
                        <Input
                            onChangeText={handleChange('username')}
                            value={values.username}
                            placeholder='Kullanıcı Adı'
                            iconName='account'
                        />
                        <Input
                            onChangeText={handleChange('password')}
                            value={values.password}
                            placeholder='Şifre'
                            iconName='key'
                            isSecure
                        />
                        <Button
                            onPress={handleSubmit}
                            title='Giriş Yap'
                            loading={loading}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Login

const user = {
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}