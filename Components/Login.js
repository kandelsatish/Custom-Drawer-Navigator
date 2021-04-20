import React,{useState,useContext} from 'react'
import { View, Text, StyleSheet, TextInput,Keyboard, Touchable, TouchableWithoutFeedback, TouchableOpacity, StatusBar } from 'react-native'
import {Contx} from './GlobalStates'
export default function Login({ navigation }) {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {
        setUsernameGlobal,
        setuserToken,
        setPasswordGlobal,
        setEmailGlobal}=useContext(Contx);

    const handleLogin=(email,password,username)=>{
        if(email.length!=0 && password.length!=0 && username.length!=0){
            setuserToken('hdafh')
            setEmailGlobal(email);
            setPasswordGlobal(password);
            setUsernameGlobal(username);
            navigation.navigate('drawer');
        }
        else{
            alert("Please enter credentials")
        }
        
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#4267B2'/>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View style={{ height: 180, width: '80%', marginTop: 100 }}>
                <TextInput placeholder="Username" style={styles.inputField} onChangeText={(val)=>setUsername(val)}/>
                    <TextInput placeholder="Email" style={styles.inputField} onChangeText={(val)=>setEmail(val)}/>
                    <TextInput placeholder="Password" style={styles.inputField} 
                    onChangeText={(val)=>setPassword(val)} secureTextEntry={true}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={styles.loginbtn} onPress={()=>handleLogin(email,password,username)}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:20}}  onPress={()=>navigation.navigate('drawer')}>
                <Text style={{color:'#fff',fontSize:15}}>Log in as guest? click here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4267B2',
    },
    inputField: {
        width: '90%',
        // borderWidth:1,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    loginbtn:{
        marginTop:50,
        width:'50%',
        backgroundColor:'red',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})
