import React,{useEffect, useState, useRef} from 'react';
import {Html5QrcodeScanner} from "html5-qrcode";
import {useDispatch,useSelector} from "react-redux";
import { minusLunch } from '../utils/dbSlice';
import done from "../assets/img/done.svg";
import { Link } from 'react-router-dom';
import temp1 from "../assets/img/temp1.gif"


const ScannerPage = () => {
    const [scanResult,setScanResult]=useState(null);
    const [meanStatus,setMealStatus]=useState();
    const [isLoaded,setIsLoaded]=useState(false);

    const dispatch=useDispatch();


    const userIndex=localStorage.getItem("DTUinfo");
    const user=useSelector(store=>store.cart.users[userIndex]);
    function onScanSuccess(decodedText, decodedResult) {
        // Handle the scanned code as you like, for example:
        console.log(`Code matched = ${decodedText}`, decodedResult);
        setMealStatus(decodedText);
        if(meanStatus==="ahjkhsuyip"){
            setIsLoaded(true);
        }
      }

    if(meanStatus=="ahjkhsuyip"){
        
        setTimeout(() => {
           
            setMealStatus("ahjkhsuyipp");
            dispatch(minusLunch(userIndex));
            
        
        }, 9000);
    }
    useEffect(()=>{
       


        const scanner=new Html5QrcodeScanner('reader',{
            qrbox:{
                height:250,
                width:250,
            },
            rememberLastUsedCamera: true,
            fps:10,
    
        });
        // scanner.render(success,error);
        scanner.render(onScanSuccess);
        function success(result){
            scanner.clear();
            setScanResult(result);
        };
        function error(err){
            console.log(err);
        }

    },[])
  return (
    <div className='relative'>
        <div className='flex justify-center self-center	content-center	text-lg p-2 pt-4'><div>Scan QR and have tasty and healthy meal 😋</div></div>
       <>
        {/* {
            scanResult==="ahjkhsuyip"
            ? (<myDiv user={user} />)
            : (<div id='reader'>Meal Already Taken</div>)
        } */}

        {/* <div class="w-full h-screen bg-gray-200 flex justify-center items-center">
          <div class="bg-gray-400 w-96 h-96 relative z-0">
           <p class="italic text-bold bd-red-100 font-serif">Map</p>
           <div class="absolute inset-0 flex justify-center items-center z-10">
           <p class="text-2xl font-bold">This should be on top of the map</p>
           </div>
          </div>
        </div> */}

        {/* {
            isLoaded?(<div>Enjoy your meal!!</div>):(<div>already taken meal!!</div>)
        } */}
        </>

        {meanStatus==="ahjkhsuyip"&&user.lunch===1?(<div className='flex flex-col justify-center z-20 left-auto right-auto mt-[30%] mb-[200%]'>
            <img src={temp1}/>
           <div className='flex bg-green-600 justify-center'>
            <img src={done} height={45} width={45} alt='Enjoy Your Meal!!'/>
            <div className='text-md mt-auto mb-auto p-3 rounded-md'>Varified User</div>
           </div> 
           
           </div>):(<div></div>)}
        <div id="reader" className='z-0'></div>


    </div>
  )
}

export default ScannerPage;


// ahjkhsuyip
{/* <div>Success: <a href={"http://"+scanResult}>{scanResult}</a></div> */}