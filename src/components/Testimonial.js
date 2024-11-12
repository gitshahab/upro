import Asset from '../assets/asset 9.png';
import DoneIcon from '@mui/icons-material/Done';
import Asset1 from "../assets/asset 36.jpeg";

export const Testimonial = () => {
  return (
    <div className='container mt-10'>
        <h2 className='text-5xl sm:font-semibold mb-10'>Customer Stories</h2>
        <div className='rounded-xl border flex flex-col lg:flex-row items-end'>
            <div id="left" className='flex flex-col gap-12 p-8'>
                <div className='flex gap-2 items-center'>
                    <img className='h-10' src={Asset} alt="clickup" />
                    <span className='text-2xl font-medium sm:font-semibold'>ClickUp</span>
                </div>
                <h3 className='text-xl leading-relaxed'>ClickUp is a powerful and versatile with its intuitive interface and wide range of features, ClickUp streamlines workflows and boosts productivity.</h3>
                <div id="tags" className='flex flex-wrap gap-3'>
                    <div className='flex gap-2 items-center justify-center text-yellow-800 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md'>
                        <DoneIcon />
                        <span className='font-medium font-head'>Chromeless UI</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center text-yellow-800 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md'>
                        <DoneIcon />
                        <span className='font-medium font-head'>Native spellcheck</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center text-yellow-800 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md'>
                        <DoneIcon />
                        <span className='font-medium font-head'>Task time in menu</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center text-yellow-800 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md'>
                        <DoneIcon />
                        <span className='font-medium font-head'>Notification count in the dock</span>
                    </div>
                    <div className='flex gap-2 items-center justify-center text-yellow-800 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md'>
                        <DoneIcon />
                        <span className='font-medium font-head'>Global hotkey to create task</span>
                    </div>
                    <p className='text-lg font-light text-gray-400 mt-10'>"Upro provided us with a <span className='text-gray-800'>polished desktop app</span> in no time. Their experts guided us through a smooth migration from our outdated lagacy desktop app, enabling us to deliver <span className='text-gray-800'>new and improved features</span> to our valuable customer."</p>
                    <div className='flex items-center gap-4 mt-10'>
                        <img className="rounded-full" src={Asset1} alt="Zeb" />
                        <span>
                            <h3>Zeb Evans</h3>
                            <p className='text-gray-500'>Founder & CEO, ClickUp</p>
                        </span>
                    </div>
                </div>
            </div>
            <div id="right">

            </div>
        </div>
    </div>
  )
}
