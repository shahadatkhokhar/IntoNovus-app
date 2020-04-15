import React,{Component} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import styles from '../Styles'
import {createStackNavigator} from '@react-navigation/stack'
import firebase from 'react-native-firebase'


export default class HomeScreen extends Component{
    state = {
        currentUser:null,
        errorMessage:null
    }
    componentDidMount(){
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }
    handleLogout=()=>{
        firebase.auth().signOut()
        .then(()=>this.props.navigation.navigate('Login'))
        .catch(error => this.setState({errorMessage:error.message}));
    }
    render(){
        const {currentUser} = this.state 
        return(
            <View style={styles.Home}>
                <View>
					<StatusBar backgroundColor='black' barStyle='light-content'/>
				</View>
                <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                          <Text>This is home screen</Text>
                </View>
                <TouchableOpacity style={styles.signupBtn} 
                   onPress= {this.handleLogout}>
                       <Text>Logout</Text>
                </TouchableOpacity>
                
                {this.state.errorMessage &&
					<Text style={{ color: 'red' }}>
            		    {this.state.errorMessage}
          		    </Text>}
            </View>
        )
    }
}
