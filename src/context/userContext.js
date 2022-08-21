import React from 'react';

export const userContext = React.createContext({
    account: null,
    setAccount: () => {},
    isVerified: false,
    setIsVerified: () => {}, 
});


