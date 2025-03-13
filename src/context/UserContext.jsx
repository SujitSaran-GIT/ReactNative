import { createContext, useState } from "react"

const UserContext = createContext(undefined)

const UserProvider = ({children}) => {
    const [user,setUser] = useState("SUJIT")

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}