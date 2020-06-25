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
import Icon from 'react-native-vector-icons/Feather'


const user = auth().currentUser
export default class ProfileScreen extends Component{
    componentDidMount() {
        this._isMounted = true;
      }
    
      componentWillUnmount() {
        this._isMounted = false;
      }
      
    state = {
        name:"",
        institute:"",
        email:"",
        isloading:true
    }

    setData = () =>{
        this.state = this.defaultState
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

    handleLogout=()=>{
        auth().signOut()
        //.then(()=>this.props.navigation.navigate('Login'))
        .catch(error => this.setState({errorMessage:error.message}));
    }
    render(){
        if(this.state.isloading==true){
            return(
                <View style={styles.Home}>
                    <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                    <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                        <ActivityIndicator size="large" color="#75db1b"/>
                        <this.setData/>                
                    </View>
                </View>
        )
        }
        else{
            return(
                <View style={{flex:1}}>
                    <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                        <TouchableOpacity style = {{flexDirection:'row',justifyContent:'flex-end',padding:7}}
                        onPress={()=>this.props.navigation.navigate('EditInfo')}>
                            <Icon name='edit' size={34}/>  
                        </TouchableOpacity>
                    <View style={styles.profileScreen}>
                        <TouchableOpacity style={styles.profilePhoto}>
                            <Text>Profile Photo</Text>
                        </TouchableOpacity>
                    <Text style={{fontSize:35, fontWeight:'bold'}}>{user.displayName}</Text>

                    <View style={{flexDirection:'row',margin:5}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>From: </Text>
                    <Text style={{fontSize:17}}>{this.state.institute}</Text>
                    </View>

                    <View style={{flexDirection:'row',margin:5, paddingBottom:30}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>Email: </Text> 
                    <Text style={{fontSize:17}}>{this.state.email}</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.LogoutBtn} 
                        onPress= {this.handleLogout}>
                            <Text>Logout</Text>
                    </TouchableOpacity>

                    {this.state.errorMessage &&
					    <Text style={{ color: 'red' }}>
            		        {this.state.errorMessage}
          		        </Text>
                    }
                    </View>
                </View>
            )
        }
    }
}
