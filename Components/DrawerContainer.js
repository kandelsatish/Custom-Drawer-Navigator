import React,{useContext} from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Avatar, Drawer, Divider, Caption } from 'react-native-paper'
import {Contx} from './GlobalStates'
export default function DrawerContainer({navigation}) {
const {emailGlobal,usernameGlobal,setuserToken}=useContext(Contx);

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={'#4267B2'} />
            <View style={styles.topImageView}>
                <Avatar.Image size={90} source={require('./assets/khata.png')} style={{ marginTop: 20 }} />
                <View style={styles.userInfo}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 20 }}>{usernameGlobal}</Text>
                    <Caption style={{ color: '#ffff', fontWeight: 'bold' }}>{emailGlobal}</Caption>
                </View>
            </View>
            <View>
                
            </View>
            <Drawer.Section title="Some title">
                <Drawer.Item
                    icon='home'
                    label="Home"
                    onPress={() => navigation.navigate('home')}
                />
                <Drawer.Item
                    icon='bell'
                    label="Notifications"
                    onPress={() => navigation.navigate('Notifications')}
                />
                <Drawer.Item
                    icon='account'
                    label="Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </Drawer.Section>
            <View style={styles.logoutBtn}>
            <Drawer.Section>
                <Drawer.Item
                    icon='logout'
                    label="Logout"
                    onPress={() => setuserToken(null)}
                />
            </Drawer.Section>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topImageView: {
        height: 250,
        backgroundColor: '#4267B2',
        alignItems: 'center'
    },
    userInfo: {
        marginTop: 30,
        alignSelf: 'center'
    },
    logoutBtn:
    {
        flex:1,
        justifyContent:'flex-end',
    }
})
