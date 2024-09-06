import Image from "next/image";
import React from "react";
import { Button } from "./custome-btn";
import { RedirectBtn } from "./redirect-btn";
import { EnrollmentStatus } from "@prisma/client";
import EnrollButton from "./enroll-btn";
import { cn } from "@/lib/utils";
interface CourseCardProps {
  thumbnail: string;
  name: string;
  price:number;
  id: string;
  enrollmentStatus:EnrollmentStatus,
  instructor:string
}
export const CourseCard = ({
  thumbnail,
  name,
  price,
  enrollmentStatus,
  id,
  instructor  
}: CourseCardProps) => {
  return (
    <div className="bg-slate-300 py-2  space-y-2 flex flex-col justify-center items-center rounded-md md:p-4 p-2">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div>
        <Image
          src={`/${thumbnail}`}
          width={400}
          height={400}
          alt={name}
          className="w-40"
        />
      </div>

      <div className="w-full px-1 space-y-2">
        <div className="flex justify-between">
        <h1 className="text-red-500 text-xl">{price}</h1>
        <h2 className={cn("text-green-900",enrollmentStatus=="CLOSED"&&"text-red-700")}>{enrollmentStatus}</h2>
        </div>
        <h2>by {" "}{instructor}</h2>
        <div className="flex justify-between space-y-2">
          { enrollmentStatus!="CLOSED" &&<EnrollButton thumbnail={thumbnail} name={name} price={price} enrollmentStatus={enrollmentStatus} instructor={instructor} id={id}/>}
          <RedirectBtn url={`/course/${id}`} label="view details" />
        </div>
      </div>
    </div>
  );
};
