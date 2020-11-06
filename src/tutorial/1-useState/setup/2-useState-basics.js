import React, {useState} from 'react';

const UseStateBasics = () => {
    const [title, setTitle] = useState('Default Title');
    const handleClick = () => {
        if (title === 'Default Title') {
            setTitle('New Title');
        } else {
            setTitle('Default Title');
        }
    };
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type={"button"} className="btn" onClick={handleClick}>Change Title</button>
        </React.Fragment>
    );
};

export default UseStateBasics;
