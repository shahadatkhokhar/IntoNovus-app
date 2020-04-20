import 'react-native-gesture-handler';
import React, {Component} from 'react'
import {
	View,
	Text, 
	Image,
    StatusBar,
	TextInput,
	TouchableOpacity
} from 'react-native'
import styles from '../Styles'
import auth from '@react-native-firebase/auth'

export default class ForgotScreen extends Component{
    state={
        regisEmail:"",
        errorMessage:null    
    }
    handleSendemail=()=>{
        if(this.state.regisEmail==="")
        {
            alert("Enter a valid email")
        }
        else{
            auth()
            .sendPasswordResetEmail(this.state.regisEmail)
            .catch(error => this.setState({errorMessage:error.message}))
            .then(()=>this.props.navigation.navigate('Login'))
            alert("Reset link sent")
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <StatusBar backgroundColor='black' barStyle='light-content'/>
                </View>
                <View>
					<Image resizeMode='contain' style = {styles.loginimage} source={require('./login/login_logo.png')}/>
				</View>
                <View style = {styles.inputView}>
					<TextInput
						style={styles.inputText}
						placeholder="Email"
						placeholderTextColor="#696969"
						onChangeText={text => this.setState({regisEmail:text})}/>
				</View>
                {this.state.errorMessage &&
					        <Text style={{ color: 'red' }}>
            				{this.state.errorMessage}
          				</Text>}
                <TouchableOpacity style={styles.signupBtn}
						onPress = {this.handleSendemail} >
							<Text style = {styles.btnText}>SEND EMAIL</Text>
				    </TouchableOpacity>

            </View>
        )
    }
}