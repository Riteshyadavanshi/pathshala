"use client"



import React from 'react'
import { Button } from './custome-btn'
import { useRouter } from 'next/navigation'

interface RedirectBtnProps{
     url:string,
     label:string,
      
}
export const  RedirectBtn = ({url ,label}:RedirectBtnProps) => {
     const router=useRouter()
       const handleRedirect=()=>{
             router.push(url)
       }
  return (
     <Button onClick={handleRedirect} >
        {label}
     </Button>
  )
}
