import { Text, View,StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Header({navigation}) {
    return (
        <View style={styles.container}>
         <MaterialCommunityIcons name="menu" size={30} color={'#fff'} onPress={()=>navigation.openDrawer()}/>
        <Text style={styles.headerTitle}>Home</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'space-between',
        backgroundColor:'#4267B2',
        flexDirection:'row'
    },
    headerTitle:{
        alignSelf:'center',
        marginLeft:50,
        fontSize:25,
        color:'#fff'
    }
})
