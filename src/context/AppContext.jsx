import { createContext, useState } from "react";

export const MainContext = createContext()

export const AppContext = (props)=>{
    const[van,setVan] = useState(true)
    const value = {
        name1 : "Salaar",
        van,
        setVan
    }
    return(
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}