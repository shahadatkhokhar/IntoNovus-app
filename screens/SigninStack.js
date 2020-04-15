import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './Container/Home.js'
import ContactScreen from './Container/ContactUs.js'
import AboutScreen from './Container/About'

const Drawer = createDrawerNavigator()
export default function SigninStack() {

  return (

    <NavigationContainer>

      <Drawer.Navigator 
      initialRouteName='Home'>
        <Drawer.Screen
        name="Home" 
        component={HomeScreen} 
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
          name="Contact Us" 
          component={ContactScreen} 
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
          component={AboutScreen} 
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