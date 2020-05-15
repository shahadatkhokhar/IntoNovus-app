import React,{Component, useEffect, useState} from 'react'
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import styles from '../Styles'
import firestore from '@react-native-firebase/firestore'
import { ScrollView } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width
export default class EventScreen extends Component{
    getCollection =() =>{
        const [events, setEvents] =useState([])
        const [loading,setloading] = useState(true)

        useEffect(() => {
            const subscriber = firestore()
            .collection('Events')
            .onSnapshot(querySnapshot=>{
                const events = []

                querySnapshot.forEach(documentSnapshot =>{
                    events.push({
                        ...documentSnapshot.data(),
                    });
                });
                setEvents(events);
                setloading(false);
            })
            
            return ()=>subscriber();
        },[]);
        if(loading)
            return <ActivityIndicator size = 'large' color='#75db1b'/>
        return (
            events.map((items, index)=>{
                return (
                        <View style ={styles.EventScreen}>
                            <View>
                                <Text style = {{fontSize:24, fontWeight:'bold', padding:5}}>{items.Name}</Text>
                            </View>
                            <View style = {{paddingLeft:10}}>
                                <Text style = {{fontSize:15, fontWeight:'bold',}}>:-{items.Date}, {items.Time}</Text>
                            </View>
                            <View style= {{flexDirection:'row', paddingLeft:10}}>
                                <Text style = {{fontSize:15, fontWeight:'bold',}}>:-Venue: </Text>
                                <Text>{items.Venue}</Text>
                            </View>
                        </View>

                );
            })
        );
    }

    render(){
        return(
            <View style={styles.Home}>
                <View>
					<StatusBar backgroundColor='black' barStyle='light-content'/>
				</View>
                <View style={{flex:1, justifyContents:'center'}}>
                    <ScrollView>
                    <this.getCollection/>
                    </ScrollView>                                
                </View>
            </View>
        )
    }
}

