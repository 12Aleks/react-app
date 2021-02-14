import React,  {useReducer} from 'react'
import {AlertContext} from "./alertContext";
import {alertsReducer} from "./alertsReducer";

export const AlertState = ({children}) =>{
    const [state, dispatch] = useReducer(alertsReducer, {visible: false});



    return(
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}