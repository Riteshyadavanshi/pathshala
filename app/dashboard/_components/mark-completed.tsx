import { Button } from '@/components/custome-btn'
import { markCompleted } from '@/lib/enroll'
import { useRouter } from 'next/navigation'
import React from 'react'
interface CompletedBtnProps{
     courseId:string
}
export const CompletedBtn = ({courseId}:CompletedBtnProps) => {
    const router=useRouter()
  const handleClick=()=>{
     markCompleted(courseId);
     router.refresh()

  }
  return (
     <Button onClick={handleClick}>
       mark Completed
     </Button>
  )
}
