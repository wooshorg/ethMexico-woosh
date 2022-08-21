import React from 'react';

export const userContext = React.createContext({
    account: null,
    setAccount: () => {},
    balance: 0, 
    setBalance: () => {},
    creditsAvailable: 0, 
    setCreditsAvailable: () => {},
});


