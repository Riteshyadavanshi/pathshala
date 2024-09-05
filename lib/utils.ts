import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {prisma} from "./db-connect"
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const getCourse=async(courseId:string)=>{
  return await prisma.course.findUnique({
    where:{
      id:courseId
    }
   })
}