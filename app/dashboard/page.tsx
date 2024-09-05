 "use client"

import { Course } from "@prisma/client"
import { EnrollCourse } from "./_components/enroll-course-card"
  type Courses=Course&{status:string}
const StudentDashboard = () => {
    const enrollCourses:Courses []=JSON.parse(localStorage.getItem("enrolledCourses")||"[]")
    
  return (
    <>
    <section className="p-3">
    <h1 className="text-2xl font-bold text-indigo-900">Enrolled Courses</h1>
     <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-2">
          
        {
            enrollCourses&&enrollCourses.map(course=><EnrollCourse thumbnail={course.thumbnail} name={course.name} instructor={course.instructor} key={course.id} courseId={course.id} status={course.status}/>)
        }
         {
          !enrollCourses.length&&<div>
              <h1 className="text-3xl text-red-600"> you have not enrolled in any Courses</h1>
          </div>
         }
         </div>
     </section>
     </>
     
  )
}

export default StudentDashboard