import Asset from '../assets/asset 9.png';
import DoneIcon from '@mui/icons-material/Done';
import Asset1 from "../assets/asset 36.jpeg";
import Asset3 from "../assets/asset 34.png";
import Asset4 from "../assets/asset 45.jpeg"
import Asset5 from "../assets/asset 37.svg";
import Asset6 from "../assets/Upro dashborad.webp";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DownloadingIcon from '@mui/icons-material/Downloading';

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
                <div id="tags" className='flex flex-wrap gap-3 max-w-7xl'>
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
                        <img className="rounded-full" src={Asset4} alt="Zeb" />
                        <span>
                            <h3>Zeb Evans</h3>
                            <p className='text-gray-500'>Founder & CEO, ClickUp</p>
                        </span>
                    </div>
                </div>
            </div>
            <div id="right">
                <img src={Asset3} className='pl-12' alt="ClickUp" />
            </div>
        </div>
        <div className='mt-4 flex flex-col lg:flex-row justify-between gap-4'>
            <div className='rounded-2xl gradient-outer group'>
                <div className='rounded-2xl gradient-inner flex'>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex gap-2 items-center'>
                            <CodeOffIcon className='rounded-full bg-blue-400 p-1'/>
                            <h3 className='text-xl font-semibold'>Native APIs</h3>
                        </div>
                        <p className='text-gray-500 mt-4'>Upro offers seamless integration of native APIs, making it effortless to build powerful and efficient applications performance.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className="rounded-full" src={Asset1} alt="Rise" />
                            <span>
                                <h3>Rick Pastoor</h3>
                                <p className='text-gray-500'>RISE</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl gradient-outer group'>
                <div className='rounded-2xl gradient-inner flex'>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex gap-2 items-center'>
                            <AutoFixHighIcon className='rounded-full bg-yellow-400 p-1'/>
                            <h3 className='text-xl font-semibold'>Cleaner</h3>
                        </div>
                        <p className='text-gray-500 mt-4'>Upro's clean code architecture and modular design ensure maintainable and scalable applications, faster time-to-market.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <img className="rounded-full h-12" src={Asset5} alt="Rise" />
                            <span>
                                <h3>Yul Chi</h3>
                                <p className='text-gray-500'>Y Texttile</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl gradient-outer group'>
                <div className='rounded-2xl gradient-inner flex'>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex gap-2 items-center'>
                            <AllInclusiveIcon className='rounded-full bg-green-400 p-1'/>
                            <h3 className='text-xl font-semibold'>Cluster</h3>
                        </div>
                        <p className='text-gray-500 mt-4'>Upro's powerful clustering capabilities enable efficient resource utilization and scalability applications across multiple nodes.</p>
                        <div className='flex items-center gap-4 mt-4'>
                            <span className="rounded-full">🅿️</span>
                            <span>
                                <h3>Parker</h3>
                                <p className='text-gray-500'>VoiceFlow</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='rounded-xl flex flex-col lg:flex-row items-end bg-black mt-10'>
            <div className='flex flex-col gap-12 p-8'>
                <span className='text-gray-400 font-head font-medium'>Ready To Start Building?</span>
                <h2 className='text-white text-4xl lg:text-5xl leading-relaxed'>Create your Web app for free*</h2>
                <p className='text-gray-300 lg:text-xl'>Upro Builder will take you step-by-step through the process of creating your first web app in just an hour.</p>
                <button className='bg-blue-500 rounded-lg text-white p-2 font-semibold flex items-center justify-center gap-2 hover:bg-blue-600'><DownloadingIcon/> Download Upro Builder</button>
                <p className='text-gray-500'><span className='text-gray-400 font-medium'>Upro: Your Ultimate Development Platform.</span><br/> Revolutionize your development process with Upro. Experience seamless integration of native APIs, clean code architecture, and powerful clustering capabilities. Build high-performance, scalable, and user-friendly applications with ease.</p>
            </div>
            <div id="right" >
                <img src={Asset6} className='pl-12' alt="ClickUp" />
            </div>
        </div>
    </div>
  )
}
