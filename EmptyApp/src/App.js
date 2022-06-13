import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import Loading from './components/Loading'

const Stack = createNativeStackNavigator()

const App = () => {
  const userSession = useSelector(state => state.user)
  const isAuthLoading = useSelector(state => state.isAuthLoading)

  if (isAuthLoading) {
    return <Loading />
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userSession ? (
          <Stack.Screen name='Login' component={Login} />
        ) : (
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App