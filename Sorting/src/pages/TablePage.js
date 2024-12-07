// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage(){

    const data =[
        {name: 'orange', color:'bg-orange-500', score:5, date: '2024-12-07'},
        {name: 'Apple', color:'bg-red-500', score:3, date: '2024-12-04'},
        {name: 'Banana', color:'bg-yellow-500', score:2, date: '2024-12-05'},
        {name: 'Lime', color:'bg-green-500', score:4, date: '2024-12-10'},
        
    ];

    const config = [
        {label:'Name',
         render: (fruit)=> fruit.name,
         sortValue : (fruit)=> fruit.name
        },
        {label: 'Color',
            render: (fruit)=> <div className={`p-3 m-2 ${fruit.color}`}/>
        },
        {label: 'Score',
            render: (fruit)=> fruit.score,
            sortValue:(fruit)=>fruit.score,
        },
        {label: 'Squared Score',
            render: (fruit)=> fruit.score**2,
            sortValue:(fruit)=>fruit.score**2,
        },
        {label: 'Date', 
            render: (fruit) => fruit.date,
            sortValue: (fruit) => new Date(fruit.date).getTime()}
    ];

  const keyFn =(fruit)=>{
           return fruit.name;
  };

    return(
    <div>
        <SortableTable data={data} config={config} keyFn={keyFn}/>  
    </div>
)}

export default TablePage;