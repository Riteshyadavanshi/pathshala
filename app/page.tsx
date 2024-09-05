 
 import { CourseCard } from '@/components/course-card'
 import React from 'react'
 import {prisma} from "@/lib/db-connect"
import { Search } from '@/components/search';
 const Home = async({
  searchParams,
}: {
  searchParams: {  search: string  | undefined };
}) => {
  
  let course;
   if(searchParams.search!=null){
      course= await prisma.course.findMany({
      where:{
         OR:[
          {name:{contains:searchParams.search,mode:"insensitive"}},
          {instructor:{contains:searchParams.search,mode:"insensitive"}},
          {description:{contains:searchParams.search,mode:"insensitive"}},

         ]
      },
      select:{
         price:true,
         name:true,
         enrollmentStatus:true,
         thumbnail:true,
         id:true,
         instructor:true

      }
    });
   }else{
    course= await prisma.course.findMany({
      select:{
         price:true,
         name:true,
         enrollmentStatus:true,
         thumbnail:true,
         id:true,
         instructor:true

      }
    });
  }
    
    
   return (
     <section className='p-4'>
       <Search/>
      <div >
           <h1 className='text-3xl'>
             All courses
           </h1>
           <div className='grid grid-cols-2 gap-2'>
               {
                  course.map(course=><CourseCard {...course} key={course.id}/>)
               }
           </div>
      </div>
     </section>
   )
 }
 
 export default Home