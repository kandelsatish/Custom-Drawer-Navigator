import React,{createContext,useState} from 'react'

export const Contx=createContext();

export default function GlobalStates({children}) {
    const [usertoken,setuserToken]=useState(null);
    const [usernameGlobal,setUsernameGlobal]=useState('Satish Kandel');
    const [emailGlobal,setEmailGlobal]=useState('Kandelsatish123@gmail.com');
    const [passwordGlobal,setPasswordGlobal]=useState('');
    return (
       <Contx.Provider value={{
           usertoken,
           setuserToken,
           usernameGlobal,
           setUsernameGlobal,
           passwordGlobal,
           setPasswordGlobal,
           emailGlobal,
           setEmailGlobal
       }}>
           {children}
       </Contx.Provider>
    )
}
