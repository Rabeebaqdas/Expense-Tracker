import React,{useContext, useState} from 'react';
import {TransactionContext} from './TransContext';
function Child() {
    let {transaction,addTransaction,deleteTransaction,Delete_All}=useContext(TransactionContext);
    let [newDics,setDics]=useState('');
    let [newAmount,setAmount]=useState('');
    function handleChange(event){
        event.preventDefault();
        if(Number(newAmount)==0){
            alert("Please Enter Amount");
            setDics('');
            setAmount('');
            return false;
        }
        addTransaction({
            amount:Number(newAmount),
            disc:newDics
        })
    
        setDics('');
        setAmount('');
    }
    
    const Income=()=>{
        let income=0;
        for(var i=0 ; i<transaction.length;i++){
            if(transaction[i].amount>0){
                income += transaction[i].amount;
            }
        }
        return income;                  
    }
    const Expense=()=>{
        let expense=0;
        for(var i=0 ; i<transaction.length;i++){
            if(transaction[i].amount<0){
                expense += transaction[i].amount;
            }
        }
        return  expense;
    }

    return (
        <div className="container">
            <h1 className="text">Expense Tracker</h1>
            <h3 id="bal">YOUR BALANCE <br />${Income() + Expense()}</h3>
            <div className="expense-container">
                <h3><span id="in"> INCOME <br />${Income()}</span></h3>
                <h3><span id="ex">EXPENSE <br /> ${Expense()}</span></h3>
            </div>
            <h3>History</h3>{transaction == '' ? <button onClick={Delete_All} disabled>Delete All</button>:<button onClick={Delete_All}>Delete All</button>}
            <hr></hr>
            <ul className="trans-list">
                {
                    transaction.map((transObj, ind) => {
                        return (
                            <li key={ind}>
                                <span>{transObj.disc}</span>
                                <span>${transObj.amount} <button onClick={()=>deleteTransaction(transObj.key)} >Delete</button> </span>
                                </li>
                        );

                    })
                }
            </ul>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="trans-form" onSubmit={handleChange}>
                <label>
                    Enter Discription <br />
                    <input type="text" placeholder="Enter text" value={newDics} onChange={(eve)=>setDics(eve.target.value)} required />
                    <br />
                </label>
                <label>
                    Enter Amount
                    <p><b>(Negative-Expense,positive-Income)</b></p>
                    <input type="number" placeholder="Enter amount" value={newAmount} onChange={(eve)=>setAmount(eve.target.value)} required />
                    <br></br>
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}
export default Child;