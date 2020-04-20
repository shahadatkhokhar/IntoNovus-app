import 'react-native-gesture-handler'
import React, {Component} from 'react'
import auth from '@react-native-firebase/auth'
import SplashScreen from 'react-native-splash-screen'

export default class Loading extends Component{
    componentDidMount(){
        auth()
        .onAuthStateChanged((user)=>{
            if(user)
            {
                if(user.emailVerified===true){
                    this.props.navigation.navigate(user ? 'Main':'Login')
                }
                else    
                {
                    this.props.navigation.navigate('Login')    
                }
                
            }
            else
            {
                this.props.navigation.navigate('Login')
            }
            
        });
        SplashScreen.hide();
        }

        render()
        {
            return null;
        }

}