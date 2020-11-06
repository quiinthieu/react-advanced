import React, {useState} from 'react';

const UseStateCounter = () => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    };
    const resetCounter = () => {
        setCounter(0);
    };
    const decreaseCounter = () => {
        setCounter(counter - 1);
    };
    const increaseLater = () => {
        setTimeout(() => {
            // setCounter(counter + 1);
            setCounter(prevState => {
                return prevState + 1;
            });
        }, 2000);
    }
    return (
        <React.Fragment>
            <section style={{margin: '4rem 0'}}>
                <h2>useState regular counter example</h2>
                <h3>{counter}</h3>
                <button className={"btn"} type="button" onClick={increaseCounter}>Increase</button>
                <button className={"btn"} type="button" onClick={resetCounter}>Reset</button>
                <button className={"btn"} type="button" onClick={decreaseCounter}>Decrease</button>
            </section>
            <section style={{margin: '4rem 0'}}>
                <h2>useState complex counter example</h2>
                <h3>{counter}</h3>
                <button className={"btn"} type="button" onClick={increaseLater}>Increase Later</button>
            </section>
        </React.Fragment>
    );
};

export default UseStateCounter;
