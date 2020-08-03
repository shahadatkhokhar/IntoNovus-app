import React,{Component, useState} from 'react'
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import styles from '../Styles'
import {createStackNavigator} from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Entypo'


user = auth().currentUser
let event
let attending
let cancelled
export default class HomeScreen extends Component{
    state ={
        name:"",
        email:"",
        loadingname:true,
        loading:true,
        loadingAttendence:true
    }
    componentDidMount() {
        this._isMounted = true;
      } 
    
      componentWillUnmount() {
        this._isMounted = false;
      }
    getName=()=>{
        firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot =>{
            this.setState({name:documentSnapshot.get('name')})
            this.setState({email:documentSnapshot.get('email')})
        })
        .then(()=>this.setState({loadingname:false}));
        return null;
    }
    getCollection =() =>{
        firestore()
        .collection("Events")
        .where("Status", "==", "current")
        .get()
        .then(querySnapshot=>{

            querySnapshot.forEach(documentSnapshot =>{
            event = documentSnapshot.data()
            })
    })
        .then(() => {
            firestore()
            .collection("RSVP")
            .doc(event.Name)
            .collection('Not attending')
            .get()
            .then(querySnapshot=>{
    
                querySnapshot.forEach(documentSnapshot =>{
                if(documentSnapshot.id===user.uid)
                {
                    attending = false
                    cancelled = true
                }
                else{
                    attending = true
                }
                })
            })
            })
            .then(()=>{
                firestore()
            .collection("RSVP")
            .doc(event.Name)
            .collection('Attending')
            .get()
            .then(querySnapshot=>{
    
                querySnapshot.forEach(documentSnapshot =>{
                if(documentSnapshot.id===user.uid)
                {
                    attending = true
                }
                else{
                    attending = false
                }
                })
            })
            .then(()=> {
                this.setState({loading:false})
                this.setState({loadingAttendence:false})
                })
            })
            
        if(this.state.loading||this.state.loadingAttendence)
            return <ActivityIndicator size = 'large' color='#75db1b'/>
        return (
            <View>
                <Text style={{fontSize:18,paddingTop:10}}>Recent Event:</Text>
                <View style ={{justifyContents:'center', alignItems:"center"}}>
                    <Text style={{fontSize:23,fontWeight:'bold', padding:7}}>{event.Name}</Text>
                    <Text>{event.Date}, {event.Time}</Text>
                    <Text>{event.Venue}</Text>
                </View>                
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:18}}>{event.Description}</Text>
                </View>
                <View style ={{alignItems:'center'}}>
                {attending===true ? (
                    <View>
                    <View style={{justifyContents:"center",alignItems:"center"}}>
                        <Text style = {styles.text}>You are going!</Text>
                    </View>
                    <View style={{justifyContent:"flex-end", alignItems:"center"}}>
                        <TouchableOpacity
                        onPress={this.Change_mind}>
                            <Text>Cancel Going ? (You can't change it later)</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                ):(
                    cancelled === true?(
                        <View>
                        <Text style = {styles.text}>You are not going</Text>
                        </View>
                    ):(
                <View style={{flexDirection:'row'}}>
                <View>
                   <Text style = {styles.text}>Are you going? : </Text> 
                </View>
                <View style ={{paddingTop:20,paddingHorizontal:10}}>
                    <TouchableOpacity 
                    onPress={this.RSVP}>
                    <Icon name='check' size={34} color="green"/>  
                    </TouchableOpacity>
                </View>
                <View style ={{paddingTop:17,paddingHorizontal:10}}>
                <TouchableOpacity
                onPress={this.CancelRSVP}>
                    <Icon name='cross' size={34} color="red"/>  
                </TouchableOpacity>
                </View>
            </View>)
            )}
            </View>
            </View>
        );
    }
    _onRefresh = () => {
        this.setState({loadingname:true})
        this.setState({loading:true})
        this.getName()
        this.getCollection()
      }
      
      RSVP = () =>{
        firestore()
        .collection('RSVP')
        .doc(event.Name)
        .collection('Attending')
        .doc(user.uid)
        .set({
            name: this.state.name,
            email:this.state.email,
        })
        .then(() => attending = true)
      }

      CancelRSVP = () =>{

        firestore()
        .collection('RSVP')
        .doc(event.Name)
        .collection('Not attending')
        .doc(user.uid)
        .set({
            name: this.state.name,
            email:this.state.email,
        })
        .then(() =>{
            attending = false
            cancelled = true
        })
      } 
      Change_mind = () =>{
        firestore()
        .collection('RSVP')
        .doc(event.Name)
        .collection('Attending')
        .doc(user.uid)
        .delete()
        .then(() =>{
            attending = false
            cancelled = true
        })
        .then(()=>{
            firestore()
        .collection('RSVP')
        .doc(event.Name)
        .collection('Cancelled')
        .doc(user.uid)
        .set({
            name: this.state.name,
            email:this.state.email,
        })
        })
        .then(()=>{
        firestore()
        .collection('RSVP')
        .doc(event.Name)
        .collection('Not attending')
        .doc(user.uid)
        .set({
            name: this.state.name,
            email:this.state.email,
        })
        })



      }
   
    render(){
        if(this.state.loadingname){
            return(
            <View>
            <ActivityIndicator size = 'large' color='#75db1b'/>
            <this.getName/>
            </View>
            );
        }
        return(
            <ScrollView
            refreshControl={
                <RefreshControl
                  onRefresh={this._onRefresh}/>}
            >
               <View style = {styles.Home}>
                <View style={{flex:1, justifyContents:'center', alignItems:'center', fontSize:35}}>
                    <Text style ={{fontSize:28, fontWeight:"bold",paddingBottom:15}}>Hi! {this.state.name}</Text>
                </View>
            <View>
                <this.getCollection/>
            </View>
            
            <View>
				<StatusBar backgroundColor='black' barStyle='light-content'/>
			</View>
            </View>
            </ScrollView>   
            ) }
}
