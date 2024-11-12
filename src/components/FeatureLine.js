import { useRef, useCallback, useEffect } from 'react';

export const FeatureLine = () => {
    const divRef = useRef([]);

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
        divRef.current.forEach((div) => {
            setupIntersection(div, true, 0.15);
        })
    }, [setupIntersection]);

  return (
    <div className='container mt-4' >
        <div className='border rounded-lg overflow-hidden flex justify-center p-4'>
            <div ref={(el) => (divRef.current[0] = el)}  id="lineDiv" className='flex gap-8 p-6'>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>Download Analytics</h3>
                <span>•</span>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>Deep Linking</h3>
                <span>•</span>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>Trays</h3>
                <span>•</span>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>24x7 support</h3>
                <span>•</span>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>SEO</h3>
                <span>•</span>
                <h3 className='my-0 mx-2 text-2xl font-semibold whitespace-nowrap'>Customise Menu</h3>
                <span>•</span>
            </div>
        </div>
    </div>
  )
}
