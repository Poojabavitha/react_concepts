// import useCounter from "../hooks/use-Counter";
import { useReducer } from "react";
import Panel from '../components/Panel';
import { produce } from "immer";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT ='add_value_to_count'
const reducer = (state, action)=>{
 switch (action.type){
    case INCREMENT_COUNT:
        // return {
        //         ...state,
        //        count : state.count +1
        //          };
        state.count = state.count+1;
        return;
    case DECREMENT_COUNT:
        return{
            ...state,
            count : state.count -1
        };
    case ADD_VALUE_TO_COUNT:
        // return{
        //    ...state,
        //    count : state.count + state.valueToAdd,
        //    valueToAdd: 0
        // };
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
    case SET_VALUE_TO_ADD:
        return{
            ...state,
            valueToAdd : action.paylaod
            };
    default:
       return state;    
    // throw new Error ('Unexpected action type :'+ action.type)
 }


//    if (action.type === INCREMENT_COUNT){
//         return {
//             ...state,
//              count : state.count +1
//            }
//     };

//     if(action.type === SET_VALUE_TO_ADD){

    //   return{
    // ...state,
    // valueToAdd : action.paylaod
    // };
// }
//     return state;
};

function CounterPage ({initialCount}){
    // const [count, setCount] =useState(initialCount);
    // const [valueToAdd, setValueToAdd]= useState(0);
    const[state, dispatch] = useReducer (produce(reducer),{
        count : initialCount,
        valueToAdd : 0
    });
    console.log(state);
    

    const increment =() =>{
        dispatch({
            type : INCREMENT_COUNT 
        });
    };

    const decrement =() =>{
        dispatch({
            type: DECREMENT_COUNT
        })
    };  
    
    const handleChange = (event)=>{
        const value = parseInt( event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            paylaod : value  //optional
        })
         };
        const handleSubmit =(event)=>{
            event.preventDefault();

            dispatch ({
                type : ADD_VALUE_TO_COUNT,
            });
        }

    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1>
        <div className="flex flex-row">
        <button className='m-3 p-2 font-bold border-4 border-gray-500' onClick={increment}>Increment</button>
        <button className='m-3 p-2 font-bold border-4 border-gray-500' onClick={decrement}>Decrement</button>
        </div>

        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
        
            <input 
            value={state.valueToAdd || ""}
            onChange={handleChange}
            type="number" 
            className="p-1 m-3 bg-gray-50 border border-gray-300"/>
         <button className=" flex p-1 m-3 border border-gray-300">Add it!</button>
        </form>
        </Panel>
}

export default CounterPage;