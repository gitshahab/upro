import { useEffect } from 'react';
import { useScroll } from './hooks/useScroll';
import { assets } from '../assets/assets';
import ArrowDown from "../assets/asset 2.svg";


export const PoweredApps = () => {
    const { divRefs, setupIntersection } = useScroll(-48 * 4, 36 * 4, 0.15);

    useEffect(() => {
        const cleanupFns = []
        divRefs.current.forEach((div, index) => {
            if (div) {
                const isLTR = index % 2 === 0;
                const cleanup = setupIntersection(div, isLTR);
                cleanupFns.push(cleanup);
            }
        });

        return () => {
            cleanupFns.forEach((cleanup) => cleanup && cleanup());
        };

    }, [divRefs, setupIntersection]);

  return (
    <div className='flex flex-col gap-8 overflow-x-hidden'>
        <div className='flex justify-center gap-2'>
            <img className='translate-y-2' src={ArrowDown} alt="downArrow" />
            <span className='font-semibold'>APPS POWERED BY UPRO</span>
            <img className='-scale-x-100 translate-y-2' src={ArrowDown} alt="downArrow" />
        </div>
            <div className='flex flex-col gap-4'>
                <div ref={(el) => (divRefs.current[0] = el)} id="Line1" className='flex gap-4 w-screen -translate-x-48 transition-transform ease-linear'>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset23} alt="StackRadar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StackRadar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset3} alt="FocusTool" />
                        <span className='text-[12px] md:text-[16px] font-medium'>QuickChat</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset4} alt="LifeAt" />
                        <span className='text-[12px] md:text-[16px] font-medium'>LifeAt</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset5} alt="Convy" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Convy</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset6} alt="Morgen" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Morgen</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset7} alt="Campsite" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Campsite</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset9} alt="ClickUp" />
                        <span className='text-[12px] md:text-[16px] font-medium'>ClickUp</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset10} alt="Bid" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Bid</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset11} alt="Wheather" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Wheather</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset12} alt="Beeper" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Beeper</span>
                    </div>
                </div>
                <div ref={(el) => (divRefs.current[1] = el)} id="Line2" className='flex gap-4 w-screen -translate-x-36 transition-transform ease-linear'>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset13} alt="Unbounce" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset14} alt="Webstudio" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Webstudio</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset15} alt="Toools AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Toools AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset16} alt="Nemeta" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Nemeta</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset17} alt="StudyPool" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StudyPool</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset18} alt="TypeFully" />
                        <span className='text-[12px] md:text-[16px] font-medium'>TypeFully</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset19} alt="Unbounce" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset20} alt="Moises" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Moises</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset21} alt="Basedash" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Basedash</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset22} alt="Cursor AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cursor AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset23} alt="StackRadar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StackRadar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                </div>
                <div ref={(el) => (divRefs.current[2] = el)} id="Line3" className='flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear'>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset24} alt="Click Up" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Click Up</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset9} alt="Click Up" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Click Up</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset10} alt="Bid" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Bid</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset22} alt="Cursor AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cursor AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset13} alt="Cal.com" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cal.com</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset3} alt="Quick Chat" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Quick Chat</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset23} alt="Stack Radar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Stack Radar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset6} alt="Wheather" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Wheather</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset7} alt="Campsite" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Campsite</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={assets.Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                </div>
            </div>
        </div>
  )
}
