import { createContext, useContext, useState } from "react";


const Context = createContext();
export const States = ({ children }) => {
    
    const userContext = createContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return(
            <Context.Provider value={{
                email,
                setEmail,
                password,
                setPassword,
                username,
                setUsername
            }}
            >{children}
            </Context.Provider>
    );
};
export const useStates = () => useContext(Context);