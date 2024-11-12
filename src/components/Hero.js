import React from 'react'
import { ArrowRight } from '@mui/icons-material';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AdbIcon from '@mui/icons-material/Adb';
import ComputerIcon from '@mui/icons-material/Computer';

export const Hero = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent'>
        <div className='max-w-4xl mx-auto px-6 pb-32 pt-6 flex flex-col sm:items-center sm:text-center'>
            <div className='flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-2 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer transition group'>
                <div className='w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600'></div>
                <p className='font-head font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'> Find-in-page bug fixes</span></p>
                <ArrowRight className='text-yellow-800 group-hover:translate-x-1 transition'/>
            </div>
            <div className='hidden lg:flex gap-8'>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                    <IntegrationInstructionsIcon/>
                    <p>Code Optional</p>
                </div>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                    <AdbIcon/>
                    <p>Android & IOS</p>
                </div>
                <div className='flex justify-center gap-2 items-center text-gray-500'>
                    <ComputerIcon/>
                    <p>Windows, Mac, and Linux</p>
                </div>
            </div>
            <h1 className='text-4xl sm:text-7xl font-semibold leading-snug mt-4'>Web Apps, Desktop Ready in Hours</h1>
            <p className='text-xl sm:text-2xl mt-4'>Revolutionize your business with a desktop-ready web app. Experience trendy design and seamless functionality.</p>
            <div className='mt-12 flex flex-col md:flex-row items-center justify-center'>
                <button className='m-2 py-3 px-8 font-medium border bg-blue-600 text-white hover:bg-blue-800 w-full md:w-fit p-2 rounded-lg'>Order Now</button>
                <button className="m-2 py-3 px-8 font-medium border bg-white hover:bg-gray-100 w-full md:w-fit p-2 rounded-lg">Read Docs</button>
            </div>
        </div>
    </div>
  )
}
