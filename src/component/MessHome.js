import React from 'react'
import { useSelector } from 'react-redux'
import temp2 from "../assets/img/temp2.gif";

const MessHome = () => {
    const messIndex=localStorage.getItem("MessInfo");
    const data=useSelector(store=>store.cart.mess[messIndex]);
  return (
    <div className='mt-9'>
      <p className='text-lg mt-6 ml-6 bg-green-600 mr-6 p-2 rounded'>Total Meals Today: </p>
      <div className='text-lg flex flex-col mb-4 mx-6 pt-1'>
        <div className='flex justify-between'>
        <div>Breakfast: {data.breakfast}</div>
        <div className='mr-[40%]'>Snacks: {data.snacks}</div>
       
        </div>
        <div className='flex justify-between'>
        <div>Lunch: {data.lunch}</div>
        <div className='mr-[40%]'>Dinner: {data.dinner}</div>
        </div>
      </div>
      <div className='flex justify-center mt-14'>
        <img src={temp2}/>
      </div>
    </div>
  )
}

export default MessHome
