import 'react-native-gesture-handler';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import SignupScreen from './src/Auth/Signup.js'
import LoginScreen from './src/Auth/Login.js'
import ForgotScreen from './src/Auth/Forgot.js'
import Loading from './src/Loading.js'
import SigninStack from './src/SigninStack.js'
import React, {Component} from 'react'
import {
	View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


const RootStack = createSwitchNavigator({
	Login:{screen:LoginScreen},
	Loading:{screen:Loading},
	Signup:{screen:SignupScreen},
	Forgot:{screen:ForgotScreen},
	Main:{screen:SigninStack}
}, {
	initialRouteName:'Loading'
});

const AppContainer = createAppContainer(RootStack)

export default class App extends Component{
	render(){
		return(
			<AppContainer/>
		)
	}
}