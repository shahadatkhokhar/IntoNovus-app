import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './Auth/Login.js'
import SignupScreen from './Auth/Signup.js'
import ForgotScreen from './Auth/Forgot.js'

const Stack = createStackNavigator()

export default function SignoutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}