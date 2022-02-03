const TransactionReducer=(state,action)=>{
switch(action.type){
    case "Add_transaction":
        return [action.payload , ...state];
        case "Delete":
         return state.filter(data=>data.key !==action.payload);
         case "Delete_All":
             return state.filter(data=>data.key == " ")
        default:
            return state;
}
}
export default TransactionReducer;