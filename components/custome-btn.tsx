
"use client"

import { cn } from '@/lib/utils'
import React from 'react'
interface  ButtonProps{
      children:React.ReactNode
     className?:string,
     onClick?:()=>void
     
}
export const  Button = ({children,className,onClick}:ButtonProps) => {
           
  return (
    <button className={cn(' p-2 rounded-md bg-indigo-900 text-white min-w-[100px]',className)} onClick={onClick}>
        {children}
        </button>
  )
}
