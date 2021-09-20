import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);
    const [insureds, setInsureds] = useState([]);

    return (
        <UserContext.Provider value={{ userData, setUserData, insureds, setInsureds }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;