import { Button } from "@/components/custome-btn";
import Image from "next/image";
import React from "react";
import { CompletedBtn } from "./mark-completed";
import { cn } from "@/lib/utils";
interface EnrollCourseProps{
    name:string,
    instructor:string,
    thumbnail:string,
    courseId:string,
    status:string
}
export const EnrollCourse = ({
    name,
    instructor,
    thumbnail,
    courseId,
    status
}:EnrollCourseProps) => {
  return (
    <div className="flex bg-slate-100 p-4 justify-center">
      <div className="flex-1">
        <Image
          src={`/${thumbnail}`}
          alt=""
          width={500}
          height={500}
          className="h-40 w-40"
        />
      </div>
      <div className="flex-1 ">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h2> by  {instructor}</h2>
        <div className="flex flex-col space-y-2">
          <h1>progress</h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={cn("bg-blue-600 h-2.5 w-[20%] rounded-full",status=="completed"&&"w-full bg-green-700")}
               
            ></div>
          </div>
          <CompletedBtn courseId={courseId}/>
        </div>
      </div>
    </div>
  );
};
