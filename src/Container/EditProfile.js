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
import { ThemeProvider } from '@react-navigation/native';


user = auth().currentUser
export default class SignupScreen extends Component{
	state={
		name:"",
		institute:"",
		errorMessage:null
      }
	  handleEdit=()=>{
				var user =auth().currentUser
				user.updateProfile({
					displayName:this.state.name
				})
				var dbUser = firestore().collection('Users')
				.doc(user.uid).update({
					institute:this.state.institute,
					name:this.state.name
				})
				.then(()=>{
					this.setState({name:""})
					this.setState({institute:""})
					this.props.navigation.reset({
						index:0,
						routes:[{name:'ProfileScreen'}]
					})
				})
				
	  }
	  
	  render(){
		return(
			<View style={styles.ProfileEdit}>
						<View>
							<StatusBar backgroundColor='black' barStyle='light-content'/>
						</View>
						<View style = {styles.ProfileEditView}>
							<TextInput
								style={styles.inputText}
								placeholder="Name"
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({name:text})}/>
						</View>
						<View style = {styles.ProfileEditView}>
							<TextInput
								style={styles.inputText}
								placeholder="Institute"
								placeholderTextColor="#696969"
								onChangeText={text => this.setState({institute:text})}/>
						</View>
						{this.state.errorMessage &&
					        <Text style={{ color: 'red' }}>
            				{this.state.errorMessage}
          				</Text>}
						<TouchableOpacity style={styles.signupBtn}
						onPress = {this.handleEdit} >
							<Text>Update</Text>
						</TouchableOpacity>
				</View>
		);
	}

}



