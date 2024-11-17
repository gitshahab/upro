import { useRef, useEffect, useCallback } from 'react';
import ArrowDown from "../assets/asset 2.svg";
import Asset3 from "../assets/asset 3.png";
import Asset4 from "../assets/asset 4.png";
import Asset5 from "../assets/asset 5.png";
import Asset6 from "../assets/asset 6.png";
import Asset7 from "../assets/asset 7.png";
import Asset8 from "../assets/asset 8.png";
import Asset9 from "../assets/asset 9.png";
import Asset10 from "../assets/asset 10.png";
import Asset11 from "../assets/asset 11.png";
import Asset12 from "../assets/asset 12.png";
import Asset13 from "../assets/asset 13.png";
import Asset14 from "../assets/asset 14.png";
import Asset15 from "../assets/asset 15.png";
import Asset16 from "../assets/asset 16.png";
import Asset17 from "../assets/asset 17.png";
import Asset18 from "../assets/asset 18.png";
import Asset19 from "../assets/asset 19.png";
import Asset20 from "../assets/asset 20.png";
import Asset21 from "../assets/asset 21.png";
import Asset22 from "../assets/asset 22.png";
import Asset23 from "../assets/asset 23.png";
import Asset24 from "../assets/asset 24.png";

export const PoweredApps = () => {
    const divRefs = useRef([]);
    
    const initialLTR = -48*4;
    const initialRTL = 36*4;

    const scrollHandler = useCallback((element, isLTR, speed) => {
        const elementTop = element.getBoundingClientRect().top;

        if ( elementTop < window.innerHeight) {
            const translateX = (window.innerHeight - elementTop) * speed;
            let totalTranslate = isLTR ? translateX + initialLTR : -(translateX + initialRTL);
            element.style.transform = `translateX(${totalTranslate}px)`;
        }
    }, [initialLTR, initialRTL]);

    const setupIntersection = useCallback((element, isLTR, speed) => {
        const handleScroll = () => scrollHandler(element, isLTR, speed);
        const intersectionCallback = (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.addEventListener("scroll", handleScroll);
                }else {
                    document.removeEventListener("scroll", handleScroll);
                }
            });
        }
        const intersectionObserver = new IntersectionObserver(intersectionCallback);
        intersectionObserver.observe(element);
    }, [scrollHandler]);

    

    useEffect(() => {
        divRefs.current.forEach((div, index) => {
            const isLTR = index % 2 === 0;
            setupIntersection(div, isLTR, 0.15);
        })
    }, [setupIntersection]);

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
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset23} alt="StackRadar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StackRadar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset3} alt="FocusTool" />
                        <span className='text-[12px] md:text-[16px] font-medium'>QuickChat</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset4} alt="LifeAt" />
                        <span className='text-[12px] md:text-[16px] font-medium'>LifeAt</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset5} alt="Convy" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Convy</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset6} alt="Morgen" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Morgen</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset7} alt="Campsite" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Campsite</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset9} alt="ClickUp" />
                        <span className='text-[12px] md:text-[16px] font-medium'>ClickUp</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset10} alt="Bid" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Bid</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset11} alt="Wheather" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Wheather</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset12} alt="Beeper" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Beeper</span>
                    </div>
                </div>
                <div ref={(el) => (divRefs.current[1] = el)} id="Line2" className='flex gap-4 w-screen -translate-x-36 transition-transform ease-linear'>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset13} alt="Unbounce" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset14} alt="Webstudio" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Webstudio</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset15} alt="Toools AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Toools AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset16} alt="Nemeta" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Nemeta</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset17} alt="StudyPool" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StudyPool</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset18} alt="TypeFully" />
                        <span className='text-[12px] md:text-[16px] font-medium'>TypeFully</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset19} alt="Unbounce" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset20} alt="Moises" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Moises</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset21} alt="Basedash" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Basedash</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset22} alt="Cursor AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cursor AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset23} alt="StackRadar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>StackRadar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                </div>
                <div ref={(el) => (divRefs.current[2] = el)} id="Line3" className='flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear'>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset24} alt="Click Up" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Click Up</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset9} alt="Click Up" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Click Up</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset10} alt="Bid" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Bid</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset22} alt="Cursor AI" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cursor AI</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset13} alt="Cal.com" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Cal.com</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset3} alt="Quick Chat" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Quick Chat</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset24} alt="VoiceFlow" />
                        <span className='text-[12px] md:text-[16px] font-medium'>VoiceFlow</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset23} alt="Stack Radar" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Stack Radar</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset6} alt="Wheather" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Wheather</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset7} alt="Campsite" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Campsite</span>
                    </div>
                    <div className='flex flex-col min-h-24 min-w-24 items-center justify-center bg-white rounded-xl border border-gray-300'>
                        <img className='w-12 h-12 md:h-16 md:w-16' src={Asset8} alt="Rise" />
                        <span className='text-[12px] md:text-[16px] font-medium'>Rise</span>
                    </div>
                </div>
            </div>
        </div>
  )
}
