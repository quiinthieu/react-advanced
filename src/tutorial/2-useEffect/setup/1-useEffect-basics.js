import React, {useEffect, useState} from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = 'Welcome';
    }, []);


    useEffect(() => {
        if (counter > 2) {
            document.title = `You clicked ${counter} times.`;
        }
    }, [counter]);

    return (
        <React.Fragment>
            <h2>useEffect Basics</h2>
            <h3>{counter}</h3>
            <button type="button" className="btn" onClick={() => setCounter(counter + 1)}>Increase</button>
        </React.Fragment>
    );
};

export default UseEffectBasics;
