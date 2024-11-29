import Button from '../components/Button';
import { GoBell, GoCloudDownload } from "react-icons/go";


function ButtonPage() {
  const handleClick =()=>{
    console.log('click');
    
  };
  return (
    <div >
<div><Button primary rounded  className="mb-5" onClick={handleClick}><GoBell/>Click me</Button></div>
<div><Button secondary ><GoCloudDownload />share</Button></div>
<div><Button success rounded > something</Button></div>
<div><Button danger >click</Button></div>
<div><Button warning>return</Button></div>
      
          </div>
  );
}

export default ButtonPage;
