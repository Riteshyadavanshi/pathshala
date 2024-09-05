 
import { Course, EnrollmentStatus } from "@prisma/client";
import toast from "react-hot-toast";
interface CourseCardProps {
  thumbnail: string;
  name: string;
  price: number;
  id: string;
  enrollmentStatus: EnrollmentStatus;
  instructor: string;
}
export async function enrollCourse(course: CourseCardProps) {
  try {
    const enrolledCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );

    const isAlreadyEnrolled = enrolledCourses.some(
      (c: { id: string }) => c.id === course.id
    );

    if (!isAlreadyEnrolled) {
      enrolledCourses.push(course);

      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));

      toast.success("Course enrolled successfully!");
    } else {
        toast.error("already enrolled")
      
    }
  } catch (error) {
    toast.error("something went wrong")
     
  }
}

 
export const markCompleted=(courseId:string)=>{
  try{
     const courses:Course[]=JSON.parse(localStorage.getItem("enrolledCourses")||"[]")
     if(courses){
      const updatedCourse=courses.map(course=>{
          if(course.id=courseId){
              return {...course,status:"completed"}
          }
          return course
      })
      localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourse))
      
     }
    }catch(err){
       toast.error("something went wrong")
    }
}