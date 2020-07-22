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
    render(){
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
                        <TouchableOpacity onPress={()=>Linking.openURL('mailto:help.Intonovus@gmail.com')} style={{padding:7}}>
                            <Text>help.Intonovus@gmail.com</Text>
                        </TouchableOpacity>

                        <Text style={{fontSize:13}}>
                            :-The Intonovus Team
                        </Text>
                </View>
            </View>
            )
    }
}