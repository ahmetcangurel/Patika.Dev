import 'react-native-gesture-handler'
import React from 'react'
import CustomProvider from './redux/Provider'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

//Screen
import Home from './screens/Home'
import Favorites from './screens/Favorites'
import Detail from './screens/Detail'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const App = () => {

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeS" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    )
  }

  return (
    <CustomProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='HomeStack'
          screenOptions={{
            headerTintColor: '#ef5350',
            headerTitleAlign: 'center',
            drawerActiveTintColor: '#ef5350',
            drawerLabelStyle: {
              color: '#ef5350',
            },
            drawerItemStyle: {
              color: '#ef5350',
            },
          }}
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CustomProvider>
  )
}

export default App