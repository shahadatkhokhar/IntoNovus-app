import React,{Component} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import styles from '../Styles'

export default class EventScreen extends Component{
    render(){
        return(
            <View style={styles.Home}>
                <View>
					<StatusBar backgroundColor='black' barStyle='light-content'/>
				</View>
                <View style={{flex:1, justifyContents:'center', alignItems:'center'}}>
                          <Text>This is Events screen</Text>
                </View>
            </View>
        )
    }
}