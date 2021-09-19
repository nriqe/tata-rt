import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {

    console.log('UserProvider');
    const [userData, setUserData] = useState([]);
    const [insureds, setInsureds] = useState([]);

    return (
        <UserContext.Provider value={{ userData, setUserData, insureds, setInsureds }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;