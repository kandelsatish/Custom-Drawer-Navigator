import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ButtomTabNAvigator from './ButtomTabNAvigator';
import DrawerContainer from './DrawerContainer';

const Drawer=createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props)=><DrawerContainer  {...props}/>}>
            <Drawer.Screen name='hometab' component={ButtomTabNAvigator} />
        </Drawer.Navigator>
    )
}
