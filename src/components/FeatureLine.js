import { useEffect } from 'react';
import { useScroll } from './hooks/useScroll';

export const FeatureLine = () => {
    const { divRefs, setupIntersection } = useScroll(-48 * 4, 36 * 4, 0.15);    

    useEffect(() => {
        const cleanupFns = []
        divRefs.current.forEach((div) => {
            if ( div ) { 
                const cleanup = setupIntersection(div, true);
                cleanupFns.push(cleanup);
            }
        });

        return () => {
            cleanupFns.forEach((cleanup) => cleanup && cleanup());
        };
        
    }, [divRefs, setupIntersection]);

  return (
    <div className='container mt-4' >
        <div className='border rounded-lg overflow-hidden flex justify-center p-4'>
            <div ref={(el) => (divRefs.current[0] = el)}  id="lineDiv" className='flex gap-8 p-6'>
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
