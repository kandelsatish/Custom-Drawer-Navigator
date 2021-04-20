import { loadPartialConfig } from '@babel/core'
import React from 'react'
import {View,ActivityIndicator,StyleSheet,StatusBar} from 'react-native'

export default function Loading(){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#4267B2'}/>
            <ActivityIndicator color={'#ffff'} size='large'/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4267B2',
        justifyContent:'center',
        alignItems:'center'
    }
})