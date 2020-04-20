import 'react-native-gesture-handler';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import SignupScreen from './src/Auth/Signup.js'
import LoginScreen from './src/Auth/Login.js'
import ForgotScreen from './src/Auth/Forgot.js'
import Loading from './src/Loading.js'
import SigninStack from './src/SigninStack.js'

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


