import React from 'react';

const myContext = React.createContext({
    incomes : [],
    spendingLists : [],
    spendingItems : [],
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
})

export default myContext;