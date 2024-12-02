import Modal from '../components/Modal';
// import Button from '../components/Button';
import { useState } from 'react';

function ModalPage (){
const [showModal, setShowModal]=useState(false);

const handleClick =()=>{
    setShowModal(true);
    console.log('click');
    
}

return(
    <div className='relative'>
        <button onClick={handleClick} style={{backgroundColor:'#007bff', color:"white",borderRadius:"0.25rem", width:"100px", height:"30px"}} > open modal</button>
       {showModal && <Modal/>}
    </div>
)
}

export default ModalPage;