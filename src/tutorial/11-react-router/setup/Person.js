import React, {useEffect, useState} from 'react';
import {data} from "../../../data";
import {Link, useParams} from 'react-router-dom';

const Person = () => {
    const [name, setName] = useState('Default Name');
    const id = parseInt(useParams().id);

    useEffect(() => {
        setName(data.find(person => person.id === id).name);
    }, []);

    return (
        <div>
            <h2>{name}</h2>
            <Link to={"/people"} className={"btn"}>Back to People</Link>
        </div>
    );
};

export default Person;
