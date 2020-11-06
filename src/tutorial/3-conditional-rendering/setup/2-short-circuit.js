import React, {useState} from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('Billie');
    const [isError, setIsError] = useState(false);
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

    return (
        <React.Fragment>
            <h2>short circuit</h2>
            {isError ? <h3>Error...</h3> : <h3>{text}</h3>}
            <button type={"button"} className={"btn"} onClick={() => setIsError(!isError)}>Toggle Error</button>
            {/*{isError && <h3>Error...</h3>}*/}
            {/*<h3>{firstValue}</h3>*/}
            {/*<h3>{secondValue}</h3>*/}
            {/*<h3>{text || 'John Doe'}</h3>*/}
            {/*<h3>{text && 'Hello World!'}</h3>*/}
        </React.Fragment>
    );
};

export default ShortCircuit;
