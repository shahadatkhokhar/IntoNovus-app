import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    PermissionsAndroid,
    Alert
} from 'react-native'
import styles from '../Styles'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import ImagePicker from 'react-native-image-picker'
import * as Progress from 'react-native-progress'
import Icon from 'react-native-vector-icons/Feather'
import RNFetchBlob from 'rn-fetch-blob'

export async function requestPermission(){
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: "IntoNovus needs to access Image Library",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );} catch (err) {
            console.warn(err);
          }
    }   

async function getPathForFirebaseStorage (uri) {
        if (Platform.OS==="ios") return uri
        const stat = await RNFetchBlob.fs.stat(uri)
        console.log(stat.path)
        return stat.path
      }
const user = auth().currentUser

export default class ProfileScreen extends Component{
    async componentDidMount(){
        await requestPermission()
    }
    state = {
        image:null,
        imageURI:null,
        uploading:false,
        transeferred:0,
        }

    
    
    selectImage = async() =>{
        const options ={
            maxWidth:2000,
            maxHeight: 2000,
            StorageOptions:{
                skipBackup:true,
                path:'images'
            }
        };
        
            
        ImagePicker.launchImageLibrary(options, response => {    
            if(response.didCancel){
                console.log('user cancelled image picker');
                }
            else if(response.error){
                console.log('ImagePicker Error: ',response.error);
                }
            else if(response.customButton){
                console.log('User tapped custom button', response.customButton);
                }
            else{
                console.log(response)
                console.log(response.uri)
                console.log(response.path)
                const source = {uri:response.uri}
                this.setState({image:source})
            }
            })
        }
    
    uploadImage = async() =>{
        //code for emptying the folder first
        const delref =storage().ref('/Profiles/' + user.uid + '/')
        
        delref.list()
        .then(dir => {
            dir.items.forEach(fileRef => {
              this.deleteFile(delref.fullPath, fileRef.name);
            });
        })
        .catch(error => {
            console.log(error);
          });
//---------------xxxxxxxx----------------
        const {uri} = this.state.image
        const filename = uri.substring(uri.lastIndexOf('/')+1)
        const uploadUri = await getPathForFirebaseStorage(uri)

        this.setState({uploading:true})
        this.setState({transeferred:0})

        const reference = storage().ref('/Profiles/' + user.uid + '/' + filename)
        

        const task = await reference.putFile(uploadUri)
       
        const downloadURI = await reference.getDownloadURL()
            console.log(downloadURI)
            this.state.imageURI = downloadURI
            console.log(this.state.imageURI)

            firestore().collection('Users')
				.doc(user.uid).update({
					imageURI:this.state.imageURI,
                })



        this.setState({uploading:false})
        Alert.alert('Finished Uploading')
        this.setState({image:null})
    }
    
    checkStatus =() =>{
        

    }
    render(){
            return(
                <View style={styles.ProfilePic}>
                    <View>
                        <StatusBar backgroundColor='black' barStyle='light-content'/>
                    </View>
                    {this.state.image !==null?(
                        <View style ={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <TouchableOpacity style = {{padding:7}} onPress={this.uploadImage}>
                            <Icon name='check-circle' size={34} color="white"/>  
                        </TouchableOpacity>
                        </View>
                    ):<View style ={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <TouchableOpacity style = {{padding:7}} onPress ={this.selectImage}>
                        <Icon name='edit-2' size={34} color="white"/>  
                    </TouchableOpacity>
                    </View>}
                    <View style={styles.imageContainer}>
                       {this.state.image !== null?(
                           <View style ={{alignItems:"center"}}>
                           <Image source={{uri:this.state.image.uri}} style={styles.imageBox}/>
                           </View>
                       ):null}
                       {this.state.uploading ? (
                           <View style={{marginTop:20}}>
                               
                            </View>
                       ): null  } 
                    </View>

                </View>
            )
    }
}
