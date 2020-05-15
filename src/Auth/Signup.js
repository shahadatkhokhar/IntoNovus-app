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
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export default class SignupScreen extends Component{
	state={
		name:"",
		institute:"",
		contact:"",
		email:"",
		password:"",
		confirm:"",
		errorMessage:null
	  }
	  handleSignUp=()=>{
		  if(this.state.password!==this.state.confirm)
		  {
			  alert("Passwords do not match. Please re-enter your Passwords.");
		  }
		  else if(this.state.name==="")
		  {
			  alert("Enter Name")
		  }
		  else if(this.state.institute==="")
		  {
			  alert("Enter Institute Name")
		  }
		  else if(this.state.email==="")
		  {
			  alert("Enter Email")
		  }
		  else if(this.state.contact==="")
		  {
			  alert("Enter Contact Number")
		  }
		  else if(this.state.password==="")
		  {
			  alert("Enter password")
		  }
		  else if(password.length<6)
		  {
			this.setState({errorMessage:'Password cannot be less than 6 characters'})
		  }
		  else{
			auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)  
			.catch(error => this.setState({errorMessage:error.message}))
			.then(()=>{
				var user =auth().currentUser
				user.sendEmailVerification();
				user.updateProfile({
					displayName:this.state.name
				})
				var dbUser = firestore().collection('Users')
				.doc(user.uid).set({
					contact:this.state.contact,
					email:this.state.email,
					institute:this.state.institute,
					name:this.state.name
				})
				this.props.navigation.navigate('Login')
			})
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
								placeholder="Name"
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({name:text})}/>
						</View>
						<View style = {styles.inputView}>
							<TextInput
								style={styles.inputText}
								placeholder="Institute"
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({institute:text})}/>
						</View>
						<View style = {styles.inputView}>
							<TextInput
								style={styles.inputText}
								placeholder="Contact no."
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({contact:text})}/>
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
						<View style = {styles.inputView}>
							<TextInput
								secureTextEntry
								style={styles.inputText}
								placeholder="Confirm Password"
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({confirm:text})}/>
						</View>
						{this.state.errorMessage &&
					        <Text style={{ color: 'red' }}>
            				{this.state.errorMessage}
          				</Text>}
						<TouchableOpacity style={styles.signupBtn}
						onPress = {this.handleSignUp} >
							<Text style = {styles.btnText}>SIGN UP</Text>
						</TouchableOpacity>
						<TouchableOpacity
						onPress={() =>this.props.navigation.navigate('Login')}>
          					<Text style={{color:'white', fontSize:12}}>Already have an account? Login</Text>
        				</TouchableOpacity>
						

				</View>
		);
	}

}



