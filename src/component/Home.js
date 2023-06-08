import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ReactSpeedometer from "react-d3-speedometer"
import { Link } from 'react-router-dom';
import scanner from "../assets/img/scanner.png"
import { menuBreakfast,menuLunch, menuSnacks,menuDinner } from '../constants';
import {minusBreakfast,minusLunch,minusDinner,minusSnacks} from "../utils/dbSlice";
import menu from "../assets/img/menu.png";
import userm from "../assets/img/user.png";
//my card component
// const Card=({name,menu,pkj})=>{
//     return (
//         <>
//         <div className='flex flex-col items-center bg-[#E0E000] m-3 h-[10.5rem] w-40 rounded-lg'>
//          <div className='flex font-normal my-3'>
//             <div>{name}</div>          
//          </div> 
//          <ul className='list-disc font-light text-sm'>
//          {menu.map((item)=>{return <li>{item}</li>})}
//          </ul>
//          <div className='mt-auto ml-auto'>
//          <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
//          </div>
//         </div>
//         </>
//     );
// }


const Home = () => {
    const userIndex=localStorage.getItem("DTUinfo");
    const user=useSelector(store=>store.cart.users[userIndex]);
    const dispatch=useDispatch();

    // function minusBreakfast(){
    //     user.breakfast=0;
    // }
    // function minusBreakfast(){
    //     user.breakfast=0;
    // }
    // function minusBreakfast(){
    //     user.breakfast=0;
    // }
    // function minusBreakfast(){
    //     user.breakfast=0;
    // }

  return (
    <>
  
<div className="flex flex-col mx-auto max-w-sm ">

    {/* header tab */}
    <div className="flex grid-rows-2 p-3 m-2 rounded shadow-lg">
      <img width="52" height="52" src={userm} alt="user-male-circle"/>
        <div className='flex flex-col ml-2'>
        <p className="text-base	font-bold">{user.name}</p>
        <p className=''>{user.rollNumber}</p>
        </div>
        <div className='ml-auto mt-2' >
        <Link to="/details"><img width="40" height="30" src={menu} alt="menu--v1"/></Link>
        </div>
    </div>

    {/* my speedometer gauge */}
    <div className="flex justify-center p-3 h-52 rounded shadow-lg">
      <ReactSpeedometer value={user.daysLeft} minValue={0} maxValue={90} needleTransitionDuration={550} currentValueText={"Days Left: "+user.daysLeft} needleColor="steelblue" /> 
    </div>

    {/* meal menu */}
    <div className='flex flex-col  h-96 m-3 flex-wrap'>
    {(user.breakfast===1)?
    (<>
        <div className='flex flex-col items-center bg-[#E0E000] m-3 h-[10.5rem] w-40 rounded-lg'>
         <div className='flex font-normal my-3'>
            <div>Breakfast</div>          
         </div> 
         <ul className='list-disc font-light text-sm'>
         {menuBreakfast.map((item)=>{return <li>{item}</li>})}
         </ul>
         <div className='mt-auto ml-auto' onDoubleClick={()=>{
            dispatch(minusBreakfast(userIndex));
         }}>
         <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
         </div>
        </div>
    </>):(<></>)}
    {(user.lunch===1)?
        (<>
            <div className='flex flex-col items-center bg-[#E0E000] m-3 h-[10.5rem] w-40 rounded-lg'>
             <div className='flex font-normal my-3'>
                <div>Lunch</div>          
             </div> 
             <ul className='list-disc font-light text-sm'>
             {menuLunch.map((item)=>{return <li>{item}</li>})}
             </ul>
             <div className='mt-auto ml-auto' onDoubleClick={()=>{
            dispatch(minusLunch(userIndex));
         }}>
             <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
             </div>
            </div>
    </>):(<></>)}
    {(user.snacks===1)?
    (<>
        <div className='flex flex-col items-center bg-[#E0E000] m-3 h-[10.5rem] w-40 rounded-lg'>
         <div className='flex font-normal my-3'>
            <div>Snacks</div>          
         </div> 
         <ul className='list-disc font-light text-sm'>
         {menuSnacks.map((item)=>{return <li>{item}</li>})}
         </ul>
         <div className='mt-auto ml-auto' onDoubleClick={()=>{
            dispatch(minusSnacks(userIndex));
         }}>
         <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
         </div>
        </div>
    </>):(<></>)}
   {(user.dinner===1)?
    (<>
        <div className='flex flex-col items-center bg-[#E0E000] m-3 h-[10.5rem] w-40 rounded-lg'>
         <div className='flex font-normal my-3'>
            <div>Dinner</div>          
         </div> 
         <ul className='list-disc font-light text-sm'>
         {menuDinner.map((item)=>{return <li>{item}</li>})}
         </ul>
         <div className='mt-auto ml-auto' onDoubleClick={()=>{
            dispatch(minusDinner(userIndex));
         }}>
         <img width="25" height="25" src="https://img.icons8.com/ios/50/minus.png" alt="minus"/>
         </div>
        </div>
    </>):(<></>)}    
    </div>
    
    {/* my scanner tab */}
    <Link to="/scanner"><div className='flex mr-auto ml-auto w-fit bg-[#666666] h-fit p-3 rounded-full'>
    {/* <img width="48" height="48" src="https://img.icons8.com/pastel-glyph/64/ffffff/qr-code--v2.png" alt="qr-code--v2"/> */}
    <img width="42" height="42" className='ml-3' src={scanner} alt='scanner'></img>
    <div className='font-bold text-white mt-2 mr-3 ml-1' >{user.messHall} Mess</div>
    </div>
    </Link>
    
    

    
   
</div>

{/* <div>
          
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
       <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
         <p className="text-gray-700 text-base">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
         </p>
       </div>
       <div className="px-6 pt-4 pb-2">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
       </div>
     </div>
     
     
</div> */}


    </>
  )
}

export default Home
