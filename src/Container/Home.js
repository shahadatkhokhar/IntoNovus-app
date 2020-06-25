import React,{Component, useState} from 'react'
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import styles from '../Styles'
import {createStackNavigator} from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

user = auth().currentUser
let event
export default class HomeScreen extends Component{
    componentDidMount() {
        this._isMounted = true;
      }
    
      componentWillUnmount() {
        this._isMounted = false;
      }
    getCollection =() =>{
        const [loading,setloading] = useState(true)
        firestore()
        .collection("Events")
        .where("Status", "==", "current")
        .get()
        .then(querySnapshot=>{

            querySnapshot.forEach(documentSnapshot =>{
            event = documentSnapshot.data()
            })
    })
        .then(() => setloading(false))
        
        if(loading)
            return <ActivityIndicator size = 'large' color='#75db1b'/>
        return (
            <View>
                <Text style={{fontSize:18}}>Recent Event:</Text>
                <View style ={{justifyContents:'center', alignItems:"center"}}>
                    <Text style={{fontSize:23,fontWeight:'bold', padding:7}}>{event.Name}</Text>
                    <Text>{event.Date}, {event.Time}</Text>
                    <Text>{event.Venue}</Text>
                </View>                
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:18}}>{event.Description}</Text>
                </View>
            </View>
        );
    }
    componentDidMount(){
    }
    render(){
        return(
            <ScrollView>
               <View style = {styles.Home}>
                <View style={{flex:1, justifyContents:'center', alignItems:'center', fontSize:35}}>
                    <Text style ={{fontSize:28, fontWeight:"bold",paddingBottom:15}}>Hi! {user.displayName}</Text>
                </View>
            <View>
                <this.getCollection/>
            <Text style={styles.text}>

            </Text>
            </View>
            <View>
				<StatusBar backgroundColor='black' barStyle='light-content'/>
			</View>
            </View>
            </ScrollView>
        )
    }
}
