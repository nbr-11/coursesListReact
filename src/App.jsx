import { useEffect, useState } from 'react'
import './App.css'
import {apiUrl,filterData} from "./data.js";
import Filter from './components/Filter'
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Spinner from './components/Spinner'
import {toast} from "react-toastify";


function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  
  const fetchData = async()=>{
    setLoading(true);
    try{
       const res = await fetch(apiUrl);
       const output = await res.json();
       setCourses(output.data);
         
    }
    catch(error){
        toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  
  return (
    <div className='min-h-screen flex flex-col'>

      <div><Navbar /></div>
        
      <div><Filter filterData = {filterData} category = {category} setCategory={setCategory}/></div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
         
         {
          loading? (<Spinner/>):(<Cards courses={courses} category={category} setCategory={setCategory}/>)
         }
        
        
        </div>

    </div>
  )
}

export default App;


