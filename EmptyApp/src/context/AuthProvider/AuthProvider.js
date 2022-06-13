import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import reducers from './reducers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore } from 'redux'

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthLoading, setIsAuthLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('@USER')
            .then(userSession => {
                userSession ? setUser(JSON.parse(userSession)) : setUser(null)
                setIsAuthLoading(false)
            })
    }, [])

    const store = createStore(reducers, { user, isAuthLoading })

    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider