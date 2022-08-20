import React from 'react';

export const userContext = React.createContext({
    account: null,
    setAccount: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {}, 
});


