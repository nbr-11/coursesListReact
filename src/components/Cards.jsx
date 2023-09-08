import Card from './Card'
import { useState } from 'react';

function Cards(props){

    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

    function getcourses(){
      console.log("inside get courses");
      if(category === "All"){
        let allcourse = [];
    
        // for(let categories in courses){
           
        //     for(let course of courses[categories]){
        //          allcourse.push(course);
        //     }
        // }
         
        Object.values(courses).forEach((arr)=>{
             arr.forEach((element)=>{
                  allcourse.push(element);
             })
        })
       return allcourse;

      }
      else{
        // specific category;
        return courses[category];
      }
    }

   
    

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
           {getcourses().map((course)=>{
             return( <Card key ={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card> )
           })}
    </div>
  )
}

export default Cards;