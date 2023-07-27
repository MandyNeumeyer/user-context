import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <UserContext.Provider value={{ theme, setTheme, isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );

};

export default UserContext