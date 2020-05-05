import React,{Component} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import styles from '../Styles'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {Icon} from 'react-native-vector-icons'

const user = auth().currentUser
export default class ProfileScreen extends Component{
    state = {
        name:"",
        institute:"",
        email:"",
        isloading:true
    }
    setData = () =>{
        firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot =>{
            this.setState({name:documentSnapshot.get('name')}),
            this.setState({institute:documentSnapshot.get('institute')}),
            this.setState({email:documentSnapshot.get('email')})
        })
        .then(()=>this.setState({isloading:false}));
        return null;
    }
    render(){
        if(this.state.isloading==true){
            return(
                <View style={styles.Home}>
                    <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                    <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                        <ActivityIndicator size="large" color="75db1b"/>
                        <this.setData/>                
                    </View>
                </View>
        )
        }
        else{
            return(
                <View style={styles.Home}>
                    <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                    <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                    <Text>Email: {user.email}</Text>
                    <Text>Name: {this.state.name}</Text>
                    <Text>Email(db): {this.state.email}</Text>
                    <Text>institute: {this.state.institute}</Text>
                    </View>
                </View>
            )
        }
    }
}
