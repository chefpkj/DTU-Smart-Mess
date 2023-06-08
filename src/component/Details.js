import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import hungerPoster from "../assets/img/hungerPoster.jpg"
import { changeMess } from '../utils/dbSlice';
import QrReader from "react-qr-reader";

const Details = () => {
    const userIndex=localStorage.getItem("DTUinfo");
    const user=useSelector(store=>store.cart.users[userIndex]);
    const dispatch=useDispatch();
  return (
    <div>
    <div className="flex justify-center p-3 h-fit rounded shadow-lg">
      <img src={hungerPoster} alt="save food"></img>
    </div>    
    <div className="flex flex-col p-3 pl-5 h-fit rounded shadow-lg divide-y">
      <div className='text-lg font-semibold	'>Hey {user.nickName}</div>
      <div className='mt-3 py-2'>Roll Number: {user.rollNumber}</div>
      <div className='mt-3 py-2'>Last Payment Date: {user.lastPayment}</div>
      <div className='mt-2 py-2'>Amount: ₹{user.lastAmount}</div>
      <div className='mt-2 py-2'>Mess Hall: {user.messHall}</div>
      <div className='mt-2 py-2'>Phone Number: {user.phoneNumber}</div>
      <div className='mt-2 py-2'>Email: {user.email}</div>      

      
    </div>
    <div className='flex justify-center p-3 mt-2'>
    <button className='bg-[#E0E000] rounded-md p-2 mx-2' onClick={()=>{
          const mess=document.getElementById("mess").value;
          dispatch(changeMess({
            Index:userIndex,
            NewMess:mess
        }));

    }}>Change Mess Hall</button>
       <select id="mess">
       <option value={"ABH"}>ABH</option>
       <option value={"BCH"}>BCH</option>
       <option value={"JCB"}>JCB</option>
       <option value={"APJ"}>APJ</option>

       </select> 
    </div> 
    </div>
  )
}

export default Details
