import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useState } from 'react'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data : []
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    valueInitialize : (state,action) => {
        // axios.get('https://fakestoreapi.com/products')
        // .then((res)=>{
        //     console.log(res.data);
        //     // state.data = res.data;
        //     // state.data = state.data.push([res.data]);
        //     // state.data = [...res.data,state.data];
        //     // console.log(state.data);
        // })
        // .catch((err)=>{
        //     console.log("Error :- "+err);
        // })
        state.data = action.payload;
        // console.log("State Data : -"+JSON.stringify(state.data));
    } 
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,valueInitialize } = counterSlice.actions

export default counterSlice.reducer