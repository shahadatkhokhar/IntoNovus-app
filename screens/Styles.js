import {StyleSheet} from 'react-native'

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
		justifyContent:'center',
		alignItems:'center',
		padding:10,
		backgroundColor:'#fff'
	},
	Loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default styles;