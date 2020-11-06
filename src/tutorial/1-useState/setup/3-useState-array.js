import React, {useState} from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const handleClick = () => {
        setPeople([]);
    };
    const removeItem = id => {
        setPeople(prevState => {
            return prevState.filter(person => person.id !== id);
        });
    };
    return (
        <React.Fragment>
            <h2>useState array example</h2>
            {people.map(person => {
                const {id, name} = person;
                return (
                    <div key={id} className={"item"}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}
            <button type={"button"} className="btn" onClick={handleClick}>Clear Items</button>
        </React.Fragment>
    );
};

export default UseStateArray;
