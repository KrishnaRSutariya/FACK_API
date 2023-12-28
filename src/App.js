import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { valueInitialize } from "./control/controllerSlice";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./User_Card";
import { Route, Routes } from "react-router-dom/dist";
import Home from './Home';
import SingleHome from './SingelHome';
import Catagory from "./Catagory";
import Limit from "./Limit";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      // console.log("Data Fatch..!");
      // console.log(res.data);
      dispatch(valueInitialize(res.data))
    })
    .catch((err)=>{
      console.log("Data Not Fatch..!");
    })
  },[]);

  // useEffect(() => {
  //   dispatch(increment());
  //   dispatch(valueInitialize());
  // }, []);

  return(
    <>
      {/* <UserCard/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Single_Card/:id" element={<SingleHome/>}></Route>
        <Route path="/Catagory/:catagory" element={<Catagory/>}></Route>
        <Route path="/Limit/:limit" element={<Limit/>}></Route>
      </Routes>
    </>
  );
}

export default App;
