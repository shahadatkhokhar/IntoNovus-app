import 'react-native-gesture-handler';
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import SignupScreen from './screens/Auth/Signup.js'
import LoginScreen from './screens/Auth/Login.js'
import HomeScreen from './screens/Container/Home.js'
import ForgotScreen from './screens/Auth/Forgot.js';
import firebase from 'react-native-firebase'
import Loading from './screens/Loading.js'
import SigninStack from './screens/SigninStack.js'

const RootStack = createSwitchNavigator({
	Login:{screen:LoginScreen},
	Loading:{screen:Loading},
	Signup:{screen:SignupScreen},
	Forgot:{screen:ForgotScreen},
	Main:{screen:SigninStack}
}, {
	initialRouteName:'Loading'
});

const App = createAppContainer(RootStack);
export default App;

//const Stack = createStackNavigator();

/*export default class App extends Component{
	state = {LoggedIn:null}
	componentDidMount(){
        firebase.auth()
        .onAuthStateChanged((user)=>{
			if(user==null)
			{
				this.setState({LoggedIn:false})
			}
			else
			{
				this.setState({LoggedIn:true})
			}}
			),
        SplashScreen.hide();
        }
	render(){
		return(
			<NavigationContainer>
				<Stack.Navigator
				screenOptions={{
					headerStyle:{
						backgroundColor:'#000000'
					},
					headerTitleStyle:{
						fontWeight:'bold',
						color:"white"
					}
				}}
				>
				{
						this.state.LoggedIn==false ? (
							<>
							<Stack.Screen 
							name="Login" 
							component={LoginScreen}
							options={{
								headerShown: false
							}}/>
							<Stack.Screen 
							name="Signup" 
							component={SignupScreen}
							options={{
								headerShown: false
							}} />
							<Stack.Screen 
							name="Forgot" 
							component={ForgotScreen} 
							options={{
								headerShown: false
							}}/>
							</>
						):
						(
							<>
							<Stack.Screen
								name="Home" 
								component={HomeScreen} 
								/>
							</>
						)
					}
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}*/

