import React from 'react';

const myContext = React.createContext({
    incomes : [],
    spendingLists : [],
    spendingItems : [],
    isLoggedIn : null,
    handleAddIncome : () => {},
    handleAddLIst  : () => {},
    handleAddItem : () => {},
    handleDeleteIncome : () => {},
    handleDeleteList : () => {},
    handleDeleteItem : () => {},
    handleUpdateIncome : () => {},
    handleUpdateList : () => {},
    handleUpdateItem : () => {},
    fetchAll : () => {},
    handleLogged : ()=> {},
})

export default myContext;