import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Faqs = ({quest, ans}) => {
    const [ show, setShow ] = useState(false);
  return (
    <div className='flex flex-col border border-gray-800 lg:border-none lg:bg-slate-100 rounded-lg p-4 h-fit'>
        <div className='flex items-center justify-between flex-1'>
            <h3 className='font-medium'>{quest}</h3>
            <button onClick={() => setShow(!show)}><KeyboardArrowDownIcon className={`hover:cursor-pointer ${show && "transform transition rotate-180"}`}/></button>
        </div>
        <p className={`${show ? "" : "hidden"} text-gray-500 mt-4`}>{ans}</p>
    </div>
  )
}
