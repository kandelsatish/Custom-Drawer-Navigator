import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DrawerNavigator from './DrawerNavigator';
import Login from './Login'
const Stack=createStackNavigator();
export default function AuthStack() {
    return (
       <Stack.Navigator headerMode="none" >
           <Stack.Screen name="login" component={Login}/>
           <Stack.Screen name="drawer" component={DrawerNavigator} />
       </Stack.Navigator>
    )
}
