import React from 'react'
import App from '../App'
import {Contx} from './GlobalStates'
import GlobalStates from './GlobalStates'
import Loading from './Loading'

export default function Main() {
    return (
       <GlobalStates>
           <App/>
       </GlobalStates>
    )
}
