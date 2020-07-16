import React,{Component, useState} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    Linking
} from 'react-native'
import styles from '../Styles'
import firestore from '@react-native-firebase/firestore'

const emails = []
export default class ContactScreen extends Component{
    state ={
        ashish:'',
        shahadat:'',
        isloading:true
    }
    getEmail=()=>{
        firestore()
        .collection('Contact')
        .doc('Developers')
        .get()
        .then(documentSnapshot => {
            this.setState({shahadat:documentSnapshot.get('Shahadat')}),
            this.setState({ashish:documentSnapshot.get('Ashish')})
        })
        .then(() => {this.setState({isloading:false})})
        
        return null;
    }
    render(){
            if(this.state.isloading==true)   
                return (
                    <View>
                        <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                    <View>
                        <ActivityIndicator size="large" color="#75db1b"/>
                        <this.getEmail/>                
                    </View>
                    </View>
                )

            else
            return (
            <View style={styles.Home}>
                <View>
					<StatusBar backgroundColor='black' barStyle='light-content'/>
				</View>
                <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, alignItems:'center', justifyContent:'center', padding:10,fontStyle:'italic', fontWeight: 'bold'}}>
                        "Human Beings are defined by how strong connections they have".
                        </Text>
                        <Text style={{fontSize:15}}>
                        Nothing annoys a user mores than an unresopnsive developer, so here we are at your service to provide our best. 
                        Got any Query, Suggestion, Complaint, Help. Shoot us a mail at:
                        </Text> 
                        <this.getEmail/>
                        <TouchableOpacity onPress={()=>Linking.openURL('mailto:'+this.state.shahadat)} style={{padding:7}}>
                            <Text>{this.state.shahadat}</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={()=>Linking.openURL('mailto:'+this.state.ashish)} style={{paddingBottom:7}}>
                            <Text>{this.state.ashish}</Text>
                            </TouchableOpacity>
                        <Text style={{fontSize:13}}>
                            :-The Intonovus Team
                        </Text>
                </View>
            </View>
            )
    }
}