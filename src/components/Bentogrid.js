import Asset37 from '../assets/asset 28.png';
import Asset38 from '../assets/asset 29.png';

export const Bentogrid = () => {
  return (
    <div className='container mt-10'>
        <h2 className='text-5xl sm:font-semibold mb-14'>Upro handles the details</h2>
        <div className='flex flex-col gap-6 lg:grid lg:grid-cols-3' style={{gridAutoRows: "96px"}}>
            <div className="row-start-1 row-end-3 rounded-2xl gradient-outer group">
                <div className="gap-4 rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={Asset37} alt="Notification" />
                </div>
            </div>
            <div className="row-start-1 row-end-4 rounded-2xl gradient-outer group">
                <div className="gap-4  rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>App Updates</h3>
                    <p className='text-lg text-center font-light'>Stay ahead of the curve with our regular app updates. We're committed to enhancing your experience by introducing new features, improving performance, and addressing any issues.</p>
                    <img src={Asset38} alt="Notification" />
                </div>
            </div>
            <div className="row-start-1 row-end-3 rounded-2xl gradient-outer group">
                <div className="gap-4  rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={Asset37} alt="Notification" />
                </div>
            </div>
            <div className="row-start-3 row-end-6 rounded-2xl gradient-outer group">
                <div className="gap-4  rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>App Updates</h3>
                    <p className='text-lg text-center font-light'>By keeping your app up-to-date, you'll unlock a world of possibilities and enjoy the latest innovations.</p>
                    <img src={Asset38} alt="Notification" />
                </div>
            </div>
            <div className="row-start-4 row-end-6 rounded-2xl gradient-outer group">
                <div className="gap-4  rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={Asset37} alt="Notification" />
                </div>
            </div>
            <div className="row-start-3 row-end-6 rounded-2xl gradient-outer group">
                <div className="gap-4  rounded-2xl w-full h-full p-6 flex flex-col items-center gradient-inner">
                    <h3 className='text-2xl'>App Updates</h3>
                    <p className='text-lg text-center font-light'>Our updates bring exciting new features, performance optimizations, and essential bug fixes.</p>
                    <img src={Asset38} alt="Notification" />
                </div>
            </div>
        </div>
    </div>
  )
}
