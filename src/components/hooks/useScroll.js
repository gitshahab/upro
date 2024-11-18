import { useCallback, useRef} from 'react';

export const useScroll = (initialLTR, initialRTL, speed) => {
    const divRefs = useRef([]);

    const scrollHandler = useCallback((element, isLTR) => {
        const elementTop = element.getBoundingClientRect().top;

        if ( elementTop < window.innerHeight) {
            const translateX = (window.innerHeight - elementTop) * speed;
            let totalTranslate = isLTR ? translateX + initialLTR : -(translateX + initialRTL);
            element.style.transform = `translateX(${totalTranslate}px)`;
        }
    }, [initialLTR, initialRTL, speed]);

    const setupIntersection = useCallback((element, isLTR) => {
        const handleScroll = () => scrollHandler(element, isLTR);
        const intersectionCallback = (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.addEventListener("scroll", handleScroll, { passive: true });
                }else {
                    document.removeEventListener("scroll", handleScroll);
                }
            });
        }
        const intersectionObserver = new IntersectionObserver(intersectionCallback);
        intersectionObserver.observe(element);

        return () => {
            intersectionObserver.unobserve(element);
            document.removeEventListener("scroll", handleScroll);
        };

    }, [scrollHandler]);

  return { divRefs, setupIntersection };
}
