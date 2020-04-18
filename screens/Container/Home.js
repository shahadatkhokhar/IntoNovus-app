import React,{Component} from 'react'
import {
    View,
    Text,
    StatusBar,
    ScrollView,
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
        //.then(()=>this.props.navigation.navigate('Login'))
        .catch(error => this.setState({errorMessage:error.message}));
    }
    render(){
        const {currentUser} = this.state 
        return(
            <ScrollView>
               <View style = {styles.Home}>
                <View style={{flex:1, justifyContents:'center', alignItems:'center', fontSize:35}}>
                          <Text>This is home screen</Text>
                </View>
            <View>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            </View>
            <View>
				<StatusBar backgroundColor='black' barStyle='light-content'/>
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
            </ScrollView>
        )
    }
}
