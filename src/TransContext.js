import React, { createContext, useReducer } from "react";
import TransactionReducer from './TransactionReducer';
let initialTransaction = [];
export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);
    function addTransaction(transObj) {
        dispatch({
            type: "Add_transaction",
            payload: {
                amount: transObj.amount,
                disc: transObj.disc,
                key: Math.random()
            }
        })
    }
    function deleteTransaction(id) {
        dispatch({
            type: "Delete",
            payload: id
        })
    }
    function Delete_All(){
        dispatch({
            type:"Delete_All"
        })
    }

    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction,
            deleteTransaction,
            Delete_All
        }}>
            {children}
        </TransactionContext.Provider>
    );
}
