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
import firebase from 'react-native-firebase'
export default class LoginScreen extends Component{
	state={
		email:"",
		password:"",
		errorMessage:null
	  }
	  handleLogin=()=>{
		  const {email , password} = this.state
		  if(this.state.email==="")
		  {
			  alert("Enter Email.")
		  }
		  else if(this.state.password==="")
		  {
			  alert("Enter Password")
		  }
		  else
		  {	
			  firebase.auth()
			  .signInWithEmailAndPassword(this.state.email, this.state.password)
			  .catch(error => this.setState({errorMessage:error.message}))
			  firebase.auth().onAuthStateChanged((user)=>{	
				if(user)
				{
					firebase.auth().currentUser.reload()
					if(user.emailVerified===false){
						alert("Kindly verify your Email before proceeding.")	
					}
					else
					{
						this.props.navigation.navigate('Main')
					}
				}
			  });
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
							onChangeText={text => this.setState({email:text})}/>
					</View>
					<View style = {styles.inputView}>
						<TextInput
							secureTextEntry
							style={styles.inputText}
							placeholder="Password"
							placeholderTextColor="#696969"
							onChangeText={text => this.setState({password:text})}/>
					</View>

					<TouchableOpacity
					onPress={()=>this.props.navigation.navigate('Forgot')}>
          				<Text style={styles.forgot}>Forgot Password?</Text>
        			</TouchableOpacity>
					{this.state.errorMessage &&
          				<Text style={{ color: 'red' }}>
            			{this.state.errorMessage}
          			</Text>}
					<TouchableOpacity 
						style={styles.loginBtn}
						onPress={this.handleLogin}
					>
						<Text style={styles.btnText}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={styles.signupBtn}
						onPress={() =>this.props.navigation.navigate('Signup')}
					>
						<Text style = {styles.btnText}>SIGN UP</Text>
					</TouchableOpacity>
					<TouchableOpacity
					onPress={()=>firebase.auth().currentUser.sendEmailVerification()}>
          				<Text style={styles.forgot}>Resend Verification mail</Text>
        			</TouchableOpacity>
			</View>
	);
	}
}
