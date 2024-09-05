"use client"

import { Button } from "@/components/custome-btn"
import { Syllabus } from "@prisma/client"
import { useState } from "react"
interface SyllabusSectionProps{
    syllabus:Syllabus[]
}
export const SyllabusSection = ({syllabus}:SyllabusSectionProps) => {
    const [open,setOpen]=useState(false)
    const handleClick=()=>setOpen(!open)
  return (
    <div >
        <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Syllabus</h1>
        <Button className="min-w-12" onClick={handleClick}>{open?"-":"+"}</Button>
        </div>
        { 
            open&&<table className="w-full  ">
                <thead  >
                    <tr>
                        <th>Week</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody className="p-4">
                    {syllabus&&syllabus.map( ({topic,week})=> 
                    <tr key={topic}>
                        <td>{week}</td>
                        <td className="text-right">{topic}</td>
                    </tr>
                 )
}
                </tbody>
            </table>
         }
    </div>
  )
}
