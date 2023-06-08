import { createSlice } from "@reduxjs/toolkit";

const triggerSlice=createSlice({
    name:"cart",
    initialState:{
        users:[
            {
                name:"Piyush K Jha",
                nickName:"Piyush",
                rollNumber:"2K19/EP/069",
                password:"Ayush@123",
                messHall:"ABH",
                daysLeft:28,
                breakfast:1,
                lunch:1,
                snacks:1,
                dinner:1,
                phoneNumber:"9717439096",
                email:"ipiyushkjha@gmail.com",
                lastPayment:"12-03-2023",
                lastAmount:3300,


            },
            {
                name:"Vimal Vadav",
                nickName:"Vimal",
                rollNumber:"2K19/MCE/135",
                password:"vimshin@123",
                messHall:"ABH",
                daysLeft:26,
                breakfast:1,
                lunch:1,
                snacks:1,
                dinner:1,
                phoneNumber:"8743853736",
                email:"vimshin@gmail.com",
                lastPayment:"18-04-2023",
                lastAmount:3300,

            },
            {
                name:"Vishal Singh",
                nickName:"Vishal",
                rollNumber:"2K19/MCE/133",
                password:"singh@155",
                messHall:"APJ",
                daysLeft:12,
                breakfast:1,
                lunch:1,
                snacks:1,
                dinner:1,
                phoneNumber:"9350110633",
                email:"singh@gmail.com",
                lastPayment:"06-02-2023",
                lastAmount:3300,

            }
        ],
        mess:[
            {
                name:"ABH",
                id:"Mess1",
                password:"12345678",
                breakfast:2,
                lunch:2,
                snacks:2,
                dinner:2
            }, 
            {
                name:"APJ",
                id:"Mess2",
                password:"jaiShreeGanesh",
                breakfast:1,
                lunch:1,
                snacks:1,
                dinner:1
            }
        ]
    },
    reducers:{
     
        totalBreakfast:(state,action)=>{
            return state.mess[action.payload].breakfast;
        },
        totalLunch:(state,action)=>{
            return state.mess[action.payload].lunch;
        },
        totalSnacks:(state,action)=>{
            return state.mess[action.payload].snacks;
        },
        totalDinner:(state,action)=>{
            return state.mess[action.payload].dinner;
        },
        minusBreakfast:(state,action)=>{
            // state.mess[action.payload].breakfast+=(-1);
            state.users[action.payload].breakfast=0;
        },
        minusLunch:(state,action)=>{
            // state.mess[action.payload].lunch+=(-1);
            state.users[action.payload].lunch=0;

        },
        minusSnacks:(state,action)=>{
            // state.mess[action.payload].snacks+=(-1);
            state.users[action.payload].snacks=0;
        },
        minusDinner:(state,action)=>{
            // state.mess[action.payload].dinner+=(-1);
            state.users[action.payload].dinner=0;

        },
        changeMess:(state,action)=>{
            // state.users[action.payload].dinner=0;
            state.users[action.payload.Index].messHall=action.payload.NewMess;
        },
        
    }

})

export const {minusBreakfast,minusLunch,minusSnacks,minusDinner,changeMess}=triggerSlice.actions;
export default triggerSlice.reducer;

