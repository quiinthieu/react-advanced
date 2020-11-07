import React, {useEffect, useRef} from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const inputContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(() => {
        console.log(inputContainer.current);
        inputContainer.current.focus();
    })

    return (
        <React.Fragment>
            <form className={"form"} onSubmit={handleSubmit}>
                <div>
                    <input type={"text"} ref={inputContainer}/>
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hello World</div>
        </React.Fragment>
    );
};

export default UseRefBasics;
