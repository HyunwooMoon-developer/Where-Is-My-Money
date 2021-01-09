import React from 'react';

const myContext = React.createContext({
    start : 0,
    end : 0,
    dailyTotalHour : 0,
})

export default myContext;