
"use client"
import { enrollCourse } from "@/lib/enroll";
import { EnrollmentStatus } from "@prisma/client";
import { Button } from "./custome-btn";

interface EnrollButtonProps {
    thumbnail: string;
    name: string;
    price:number;
    id: string;
    enrollmentStatus:EnrollmentStatus,
    instructor:string
  }

function EnrollButton(course:EnrollButtonProps) {
  const handleEnroll = async() => {
   await enrollCourse(course);
   
  };

  return (
    <Button onClick={handleEnroll} className="bg-slate-600">
      Enroll Now
    </Button>
  );
}

export default EnrollButton;
