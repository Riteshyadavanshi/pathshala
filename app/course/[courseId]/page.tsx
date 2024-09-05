 import {prisma} from "@/lib/db-connect"
import { CourseSection } from "../_component/course-section"
 type Param={
  params:{
     courseId:string
  }
 }
  const Course =async ({params:{courseId}}:Param) => {
    const  course=await prisma.course.findUnique({
       where:{
         id:courseId
       },
       include:{
         syllabus:true
       }
    }) 
    if(!course ) return;
  return (
      <section className="flex justify-center my-10">
          <CourseSection    course={course}/>
      </section>
  )
}


export default Course

 