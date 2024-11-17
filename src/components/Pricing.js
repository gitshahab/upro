import React from 'react'

export const Pricing = () => {
  return (
    <div className='container mt-10'>
        <h2 className='text-5xl leading-normal lg:font-semibold max-w-2xl'>Choose a plan that fits your needs</h2>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 mt-4'>
            <div className='flex flex-col border lg:border-none rounded-lg p-4 lg:bg-slate-50 lg:w-1/3'>
                <h3 className='text-xl lg:text-2xl font-semibold'>Free</h3>
                <p className='text-gray-500 mt-4 max-w-sm'>For personal use or testing your app before deploying to customers</p>
                <span className='mt-2 font-semibold'>Key Features</span>
                <p className='text-gray-600 mt-4'>✔️ Free access for first time</p>
                <p className='text-gray-600'>✔️ Free for personal use</p>
                <p className='text-gray-600'>❌ Access to All Features</p>
                <p className='text-gray-600'>❌ Domain</p>
                <p className='text-gray-600'>❌ Backend Support</p>
                <button className='p-2 border rounded-md hover:border-black font-medium mt-4'>Read Docs</button>
            </div>
            <div className='flex flex-col border lg:border-none rounded-lg p-4 lg:bg-slate-50 lg:w-1/3'>
                <h3 className='text-xl lg:text-2xl font-semibold'>Essential</h3>
                <p className='text-gray-500 mt-4 max-w-sm'>For simple desktop apps.</p>
                <h4 className='mt-1'>$59<span className='text-gray-400'>/month</span></h4>
                <span className='mt-1 font-bold'>Key Features</span>
                <p className='text-gray-600 mt-4'>✔️ Access for team</p>
                <p className='text-gray-600'>✔️ Access for personal use</p>
                <p className='text-gray-600'>✔️ Access to All Features</p>
                <p className='text-gray-600'>❌ Domain</p>
                <p className='text-gray-600'>❌ Backend Support</p>
                <button className='p-2 border rounded-md hover:border-black font-medium mt-4'>Read Docs</button>
            </div>
            <div className='relative flex flex-col border lg:border-none rounded-lg p-4 lg:bg-slate-50 lg:w-1/3'>
                <p className='text-blue text-sm bg-indigo-200 w-fit rounded-full p-2 font-head absolute top-0 right-8 -translate-y-1/2'>Most Popular</p>
                <h3 className='text-xl lg:text-2xl font-semibold'>Professional</h3>
                <p className='text-gray-500 mt-4 max-w-sm'>For sophisticated desktop apps.</p>
                <h4 className='mt-1'>$99<span className='text-gray-400'>/month</span></h4>
                <span className='mt-1 font-semibold'>Key Features</span>
                <p className='text-gray-600 mt-4'>✔️ Free access for first time</p>
                <p className='text-gray-600'>✔️ Free for personal use</p>
                <p className='text-gray-600'>✔️ Access to All Features</p>
                <p className='text-gray-600'>✔️ Domain</p>
                <p className='text-gray-600'>✔️ Backend Support</p>
                <button className='p-2 bg-blue-500 border rounded-md hover:bg-blue-600 text-white font-medium mt-4'>Read Docs</button>
            </div>
        </div>
    </div>
  )
}
