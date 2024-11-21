import { Children, createContext,useState} from "react";

const BooksContext = createContext();

function Provider({Children}){
    // const[count,setCount]=useState(5);


// const valueToShare ={
//     count,
//     incrementCount:()=>{
//         setCount(count+1)
//     },
// };

return <BooksContext.Provider value={{}}>
    {Children }
</BooksContext.Provider>
}

export {Provider};
export default BooksContext;