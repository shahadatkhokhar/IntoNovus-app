import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './Container/Home.js'
import ContactScreen from './Container/ContactUs.js'
import AboutScreen from './Container/About'

const Drawer = createDrawerNavigator()
const HomeStack = createStackNavigator()
const ContactStack = createStackNavigator()
const AboutStack = createStackNavigator()

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
export default function SigninStack() {

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName='Home'>
        <Drawer.Screen
        name="Home" 
        component={HomeStackScreen} 
          />

        <Drawer.Screen
          name="Contact Us" 
          component={ContactStackScreen} 
          options={{  
            headerStyle:{
              backgroundColor:'#000000',
            },
            headerTitleStyle:{
              fontWeight:'bold',
              color:'#fff'
            },
          }}
          />

        <Drawer.Screen
          name="About" 
          component={AboutStackScreen} 
          options={{  
            headerStyle:{
              backgroundColor:'#000000',
            },
            headerTitleStyle:{
              fontWeight:'bold',
              color:'#fff'
            },
          }}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}