import React,{useContext,useEffect,useState} from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import ButtomTabNAvigator from './Components/ButtomTabNAvigator';
import DrawerNavigator from './Components/DrawerNavigator';
import {Contx} from './Components/GlobalStates'
import Loading from './Components/Loading';
import AuthStack from './Components/AuthStack';
const App= () => {
  const {usertoken,setuserToken}=useContext(Contx);
  const[isLoading,setIsLoading]=useState(true);

  setTimeout(() => {
    setuserToken("jdhah");
    setIsLoading(false);
  }, 200);

  if(isLoading){
    return(<Loading/>)
  }
  
  return (
  <NavigationContainer>
    {usertoken? <AuthStack/>:<DrawerNavigator/>}
   
  </NavigationContainer>
  );
};


export default App;
