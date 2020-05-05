import React,{Component} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import styles from '../Styles'

export default class AboutScreen extends Component{
    render(){
        return(
            <View style={styles.Home}>
                <View>
					<StatusBar backgroundColor='black' barStyle='light-content'/>
				</View>
                <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, alignItems:'center', justifyContent:'center', padding:10,fontStyle:'italic', fontWeight: 'bold'}}>
                        "Great things are done by a series of small things brought together".
                        </Text>
                        <Text style={{fontSize:15}}>
                        Being Coding Club of a technical institution, we do pretty much everything and anything related to coding. Coding events, Workshops, Hackathons (48 hours non stop coding), contests are just to name a few. We believe in coding our problems away.
                        </Text> 
                        <Text style={{fontSize:18}}>
                            Good Luck on your journey
                        </Text>
                        <Text style={{fontSize:13}}>
                            :-The Intonovus Team
                        </Text>
                </View>
            </View>
        )
    }
}