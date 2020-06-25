import {StyleSheet,Dimensions} from 'react-native'
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
	container: {
		flex:1,
    	backgroundColor: '#000000',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
	loginimage:
	{	
		justifyContent:"center",
		alignItems:"center",
		width:350,
		marginBottom:30
	},
	inputView:{
		width:"80%",
		backgroundColor:"#8c8c8c",
		borderRadius:25,
		height:50,
		marginBottom:20,
		justifyContent:"center",
		padding:20
	},
	inputText:
	{
		height:50,
		color:"white"
	},
	loginBtn:
	{
		width:"60%",
		backgroundColor:"#75db1b",
		borderRadius:40,
		height:65,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		marginBottom:10
	},
	signupBtn:
	{
		width:"40%",
		backgroundColor:"#75db1b",
		borderRadius:40,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:10,
		marginBottom:10
	},
	btnText:
	{
		color:"white",
		fontWeight:"bold"
	},
	forgot:
	{
		color:"white",

		fontSize:12,
	},
	Home:
	{
		flex:1,
		padding:10,
		backgroundColor:'#fff',
		justifyContent:"center",
		alignItems:"center"

	},
	Loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text:{
		fontSize:40
	},
	profilePhoto:{
		backgroundColor:"#696969",
		borderRadius:100,
		height:200,
		width:200,
		alignItems:"center",
		justifyContent:"center",
		marginTop:30,
		marginBottom:10
	},
	profileScreen:{
		flexDirection:'column',
		justifyContent:'center',
		alignItems:"center"
	},
	EventScreen:{
		padding:5,
		backgroundColor:'#C4C4C4',
		width:width,
		borderRadius:100,
		padding:10,
	},
	LogoutBtn:
	{
		width:"40%",
		backgroundColor:"#75db1b",
		borderRadius:40,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:10,
		marginBottom:10
	},
	
	ProfileEdit: {
		flex:1,
		alignItems: 'center',
    	justifyContent: 'center',
  	},
	ProfileEditView:{
		width:"80%",
		backgroundColor:"#9b9b9b",
		borderRadius:25,
		height:50,
		marginBottom:20,
		justifyContent:"center",
		padding:20
	},
	ProfileEditText:
	{
		height:50,
		color:"white"
	},
});

export default styles;