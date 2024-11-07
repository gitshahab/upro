import Logo from '../assets/upro logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ElectronImg from "../assets/asset 1.svg";
import { ArrowForward } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { useState } from 'react';

export const Header = () => {
  const [ menu, setMenu ] = useState(false);

  return (
    <div className='p-3 flex justify-between items-center bg-white'>
      <a href="/" className='flex gap-2 item-center'>
        <img src={Logo} className='h-6 rounded-lg' alt="logo" />
        <span className='text-lg font-medium font-head'>Upro</span>
      </a>
      <div className='hidden md:flex justify-between gap-12'>
        <a href="/" className='font-medium hover:font-semibold hover:text-blue-700'>Pricing</a>
        <a href="/" className='font-medium hover:font-semibold hover:text-blue-700'>Changelog</a>
        <a href="/" className='font-medium hover:font-semibold hover:text-blue-700'>Docs</a>
        <a href="/" className='font-medium hover:font-semibold hover:text-blue-700'>Blogs</a>
        <a href="/" className='font-medium hover:font-semibold hover:text-blue-700'>Login</a>
      </div>
      <button className='hidden md:flex gap-2 items-center border rounded-lg border-gray-400 hover:border-gray-600 px-2s'>
        <img src={ElectronImg} alt="electron" />
        <span>Electron Developers</span>
        <ArrowForward/>
      </button>
      <button onClick={() => setMenu(!menu)} className='md:hidden'>
        <MenuIcon />
      </button>
      { menu &&
        (<div className='fixed bg-white inset-0 p-3 md:hidden'>
          <div className='flex justify-between'>
            <a href="/" className='flex gap-2 item-center'>
              <img src={Logo} className='h-6 rounded-lg' alt="logo" />
              <span className='text-lg font-medium font-head'>Upro</span>
            </a>
            <button onClick={() => {setMenu(!menu)}} className='md:hidden'>
              <Close />
            </button>
          </div>
          <div className='flex flex-col p-5 gap-5'>
            <a href="/" className='font-medium hover:font-semibold hover:bg-gray-100 block rounded-lg p-2'>Pricing</a>
            <a href="/" className='font-medium hover:font-semibold hover:bg-gray-100 block rounded-lg p-2'>Changelog</a>
            <a href="/" className='font-medium hover:font-semibold hover:bg-gray-100 block rounded-lg p-2'>Docs</a>
            <a href="/" className='font-medium hover:font-semibold hover:bg-gray-100 block rounded-lg p-2'>Blogs</a>
            <a href="/" className='font-medium hover:font-semibold hover:bg-gray-100 block rounded-lg p-2'>Login</a>
            <button className='flex gap-2 items-center border rounded-lg hover:border-gray-600 px-4 py-2'>
              <img src={ElectronImg} alt="electron" />
              <span>Electron Developers</span>
              <ArrowForward/>
            </button>
          </div>
        </div>)
      }
    </div>
  )
}
