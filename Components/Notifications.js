import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
export default function Notifications() {
    return (
        <View style={styles.container}>
            <Text>this is Notifications</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})
