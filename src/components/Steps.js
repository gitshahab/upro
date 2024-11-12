import DoneIcon from '@mui/icons-material/Done';
import Asset66 from "../assets/asset 66.svg";

export const Steps = () => {
  return (
    <div className='container'>
        <h2 className='text-5xl sm:font-semibold mb-14'>How it works</h2>
        <div className='rounded-xl border px-8 py-12 flex flex-col lg:flex-row'>
            <div id="step1" className='flex flex-col gap-6 lg:w-1/2'>
                <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit rounded-lg p-1 font-head font-medium'>Steps</span>
                <h3 className='text-4xl'>Bootstrap straight from your web app</h3>
                <p className='text-lg font-light'>Copy and paste your web app domain. Customize your app icon, design and UI. Just a step ahead.</p>
                <ul className='grid grid-cols-2 gap-2'>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Multiple Window</a>
                    </li>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Menu</a>
                    </li>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Fast & Secure</a>
                    </li>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>Scalability</a>
                    </li>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>SEO</a>
                    </li>
                    <li className='flex gap-4'>
                        <DoneIcon/>
                        <a href="/" className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80'>24x7 support</a>
                    </li>
                </ul>
            </div>
            <div className='pt-12'>
                <img src={Asset66} alt="steps" />
            </div>
        </div>
    </div>
  )
}
