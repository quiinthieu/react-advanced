import React, {useEffect, useState} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    // useEffect(() => {
    //     console.log('useEffect()');
    //     window.addEventListener('resize', () => {
    //         setSize(window.innerWidth);
    //     });
    // }, []);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('useEffect()');
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
            console.log('cleanup');
        };
    }, [size]);

    return (
        <React.Fragment>
            <h2>useEffect cleanup</h2>
            <h3>{size} px</h3>
        </React.Fragment>
    );
};

export default UseEffectCleanup;
