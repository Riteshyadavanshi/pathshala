import { Course, Prisma, Syllabus } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { SyllabusSection } from "./syllabus-section";
interface CourseSectionProps {
  course: Prisma.CourseGetPayload<{
    include: {
      syllabus: true;
    };
  }>;
}
export const CourseSection = ({ course }: CourseSectionProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
      <Image
        className="w-full  object-cover"
        src={"/" + course.thumbnail}
        alt={course.name}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-gray-700 text-base mb-4">{course.description}</p>
        <div className="space-y-2">
          <p className="text-gray-600 ">
            Duration :{" "}
            <span className="text-indigo-400 font-bold">
              {" "}
              {course.duration}
            </span>
          </p>
          <p className="text-gray-600">
            Instructor :{" "}
            <span className="text-indigo-400 font-bold">
              {" "}
              {course.instructor}
            </span>
          </p>
          <p className="text-gray-600">
            Enrollment Status:{" "}
            <span className="text-indigo-400 font-bold">
              {" "}
              {course.enrollmentStatus}
            </span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Prerequesties</h1>
        <ul className="list-disc  ml-10">
           {
              course.prerequisites.map(prerequisite=><li key={prerequisite}>{prerequisite}</li>)
           }
        </ul>
      </div>
      <SyllabusSection syllabus={course.syllabus} />
    </div>
  );
};
