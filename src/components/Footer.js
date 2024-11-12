import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='flex justify-start items-center p-2'>
        <span>©️{date} upro. All rights reserved.</span>
    </div>
  )
}
