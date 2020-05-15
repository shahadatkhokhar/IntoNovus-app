import * as React from 'react'
import {Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import HomeScreen from './Container/Home.js'
import ContactScreen from './Container/ContactUs.js'
import AboutScreen from './Container/About'
import EventScreen from './Container/Events'
import ProfileScreen from './Container/Profile'

const Drawer = createDrawerNavigator()
const HomeStack = createStackNavigator()
const ContactStack = createStackNavigator()
const AboutStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const EventStack = createStackNavigator()


function HomeStackScreen(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{  
          title:"Home",
          headerStyle:{
            backgroundColor:'#000000',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#fff'
          },
          
        }}
        />
    </HomeStack.Navigator>
  );
}
function ContactStackScreen(){
  return (
    <ContactStack.Navigator>
      <HomeStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{  
          title:"Contact Us",
          headerStyle:{
            backgroundColor:'#000000',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#fff'
          },
        }}
      />
    </ContactStack.Navigator>
  );
}

function AboutStackScreen(){
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{  
          title:"About Us",
          headerStyle:{
            backgroundColor:'#000000',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#fff'
          },
        }}
      />
    </AboutStack.Navigator>
  );
}

function ProfileStackScreen(){
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{  
          title:"Profile",
          headerStyle:{
            backgroundColor:'#000000',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#fff'
          },
        }}
      />
    </ProfileStack.Navigator>
  );

}

function EventStackScreen(){
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{  
          title:"Events",
          headerStyle:{
            backgroundColor:'#000000',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'#fff'
          },
        }}
      />
      
    </EventStack.Navigator>
  );
}

export default function SigninStack() {

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName='Home'
      drawerStyle={{
        backgroundColor:'#000000',
        width:200,
        }}
        drawerContentOptions={{
          activeTintColor:"#fff",
          inactiveTintColor:"#fff"
        }}
  
      
      >
        <Drawer.Screen
        name="Home" 
        component={HomeStackScreen}
          />

        <Drawer.Screen
        name="Profile" 
        component={ProfileStackScreen}
          />

          <Drawer.Screen
          name="Events" 
          component={EventStackScreen} 
          />

        <Drawer.Screen
          name="Contact" 
          component={ContactStackScreen} 
          />

        <Drawer.Screen
          name="About" 
          component={AboutStackScreen}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}