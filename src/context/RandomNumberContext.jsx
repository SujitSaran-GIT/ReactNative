import React, { createContext, useState } from 'react'

const RandomNumberContext = createContext(undefined)

const NumberProvider = ({children}) => {
    const [num,setNum] = useState([])

    const addNumber = (n) => {
        setNum(prevNum => [...prevNum,n])
    }

    return(
        <RandomNumberContext.Provider value={{num,addNumber}}>
            {children}
        </RandomNumberContext.Provider>
    )
}

export {NumberProvider,RandomNumberContext}