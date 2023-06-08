import React,{useState,useRef} from "react";
import {Formik} from "formik";
import mess_logo from "../assets/img/logo.png";
import {url} from "../constants";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = () => {

     //function to go to the home page 
   const clicked=useRef(null);
   function pkj(){
       clicked.current.click();
   }

  

   function go_to_home(){
       const root=document.getElementById("buttonClicked");
       root.addEventListener("click",pkj());
   }
    // function to hide "invalid email or password" message 
    const [invalidMsg,setInvalidMsg]=useState(false);
    if(invalidMsg==true){
        setTimeout(() => {
            setInvalidMsg(false);
        }, 1200);
    }
   //function to call api for login request 
    // function postDat(data){
    //     fetch(url+"login/",{
    //         method:'POST',
    //         headers:{
    //             "Content-Type": "application/json",
    //             'Access-Control-Allow-Origin':'*'
    //         },
    //         body:JSON.stringify(data),
    //     })
    //     .then(async(res) => {      
    //         if(res.status === 200){
    //         // const jaya=response.headers.get('x-auth-token');
    //         // localStorage.setItem("chiefAdvisor_x-auth-token",jaya);
    //          return await res.json();      
    //         }
    //         else{     
    //             setInvalidMsg(true);
    //             return 0;
    //        }
    //     }).then((response)=>{
    //         if(response!==0){
    //             localStorage.setItem("chiefAdvisor_x-auth-token",response.token);
        
    //             go_to_home();

    //         }
    //     })
    // }
    const users=useSelector(store=>store.cart.users);
    function postData(data){
        
        users.forEach(element => {
            if(element.rollNumber===data.email){
                if(element.password===data.password){
                    localStorage.setItem("DTUinfo",users.indexOf(element));
                    go_to_home();
                    return 0;
                }
                else{
                    setInvalidMsg(true);
                    return 0;
                }
            }
        });
        setInvalidMsg(true);
        return 0;
       
    }

    return (
    <div>
      
      {/* my form (using formik package) */}
      <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
        //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          else if (!/^[A-Z0-9]+\/[A-Z]+\/[0-9]{2,}$/i.test(values.email)) {  
            errors.email = 'Invalid roll number';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          else if(values.password.length<8){
            errors.password = 'The minimum password length is 8 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
        const tmp=postData(values);
        setSubmitting(false);
        }}
      >
        {({ values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting}) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Roll Number" 
              className="bg-[#3C434E] mt-[5%]  md:w-[35%] md:mt-[2.8%] sm:w-[45%] sm:mt-[3.5%] h-11 w-[69%] p-2 ml-auto mr-auto text-sm font-light text-white rounded-md focus:outline-none focus:bg-[#4C525F]"
            />
            <div className="text-[#FF0000] text-xs  ml-auto mr-auto">
            {errors.email && touched.email && errors.email}
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Your password" 
              className=" bg-[#3C434E] mt-[5%] md:w-[35%] md:mt-[2.8%] sm:w-[45%] sm:mt-[3.5%] h-11 w-[69%] p-2 ml-auto mr-auto text-sm font-light text-white rounded-md focus:outline-none focus:bg-[#4C525F]"
            />
            <div className="text-[#FF0000] text-xs  ml-auto mr-auto">
            {errors.password && touched.password && errors.password}
            </div>
            {(invalidMsg)?(<span className="text-[#FF0000] text-xs  ml-auto mr-auto">Invalid username or password</span>):("")}
            <button type="submit" id="buttonClicked" disabled={isSubmitting} className="bg-[#3C434E] mt-[5%] md:w-[35%] md:mt-[2.8%] sm:w-[45%] sm:mt-[3.5%] w-[69%] p-2 ml-auto mr-auto text-sm font-light text-white rounded-md focus:outline-none focus:bg-[#4C525F]">
             <span>Sign in now</span>
            </button>
          </form>
        )}
      </Formik>
      </> 
      <Link to="/home"><div ref={clicked}></div></Link>
    </div>
  );}



const ContactUs=()=>{
    return (
        <div className="flex flex-col mt-[25%]">
        <div className="mr-auto ml-auto">Need Help?</div> 
        <div className="mr-auto ml-auto bg-[#3C434E] text-white rounded-md text-sm font-light p-[1.8%]"><Link to="mailto:ipiyushkjha@gmail.com">Contact Team</Link></div>
        </div>
    );
}  

const Login=()=>{
    const getMeMess=useRef(null);
    function pkj(){
        getMeMess.current.click(); 
    }
    
    return (
        <div className="flex flex-col justify-center content-center mt-3 ">
        <img onDoubleClick={()=>pkj()} className="text-5xl mr-auto ml-auto mt-[20%] md:mt-[13%] md:text-6xl sm:mt-[17%] font-extralight text-[#FCFCFC] " src={mess_logo} alt="DTU Smart Mess"/>
        <LoginForm/>
        <ContactUs/>
        <Link ref={getMeMess} to="/messLogin"></Link>
        
    </div>
    )
}

export default Login;