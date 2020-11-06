import React, {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Billie',
        age: 27,
        message: 'Random message'
    });
    const handleClick = () => {
        setPerson({...person, message: 'Hello World!'});
    }
    return (
        <React.Fragment>
            <h2>useState object example</h2>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button type={"button"} className="btn" onClick={handleClick}>Change Message</button>
        </React.Fragment>
    );
};

export default UseStateObject;
