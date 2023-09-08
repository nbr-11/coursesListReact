import { useState } from "react";
import {FcLike} from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
        
    
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler(){
        
        if(likedCourses.includes(course.id)){
            //pehle se like hue pada the

            setLikedCourses((prev)=>prev.filter((cid)=>{
                return cid !== course.id
            }))
        }

        else{

           if(likedCourses.length === 0){

              setLikedCourses([course.id]);
              
           }
           else{
            //non-empty

            // setLikedCourses((prev)=>{
            //     return prev.push(course.id);
            // })

            setLikedCourses((prev)=>{return [...prev,course.id]})


           }

           toast.success("Liked Succesfully");




        }
    }
    return (

        <div className="w-[300px] bg-slate-700 bg-opacity-80 rounded-md overflow-hidden">
              
               <div className="relative"><img src={course.image.url} alt= ""/>
                       
               <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                          
                          {
                          
                          likedCourses.includes(course.id)?(<FcLike/>):(<FcLikePlaceholder/>)
}
                    </button>
                </div>
               
               </div>

               

                <div className="p-4">
                    <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                    <p className="mt-2 text-white">{
                        course.description.length>100?course.description.substring(0,100)+".....":course.description
                    }</p>
                </div>
        </div>
    )
}

export default Card;