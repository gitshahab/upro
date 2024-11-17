import Logo from '../assets/upro logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='container mt-10'>
      <div className='bg-slate-50 flex rounded-lg justify-between'>
        <div className='flex gap-2 items-center p-4 flex-1'>
          <img className='rounded-lg h-6 lg:h-8' src={Logo} alt="upro" />
          <h1 className='text-semibold text-xl lg:text-2xl'>Upro</h1>
        </div>
        <div className='flex gap-2 items-center p-4'>
          <a href="/"><GitHubIcon/></a>
          <a href="/"><XIcon/></a>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <span className='mt-4 text-gray-400'>©️{date} upro. All rights reserved.</span>
      </div>
    </div>
  )
}
