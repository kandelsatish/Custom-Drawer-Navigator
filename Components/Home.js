import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
           <Text>this is home</Text>
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