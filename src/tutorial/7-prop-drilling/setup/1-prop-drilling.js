import React, {useState} from 'react';
import {data} from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
    const [people, setPeople] = useState(data);

    const removePerson = id => {
        setPeople(people.filter(person => person.id !== id));
    }

    return (
        <section>
            <h3>Prop Drilling</h3>
            <List people={people} removePerson={removePerson}/>
        </section>
    );
};

const List = ({people, removePerson}) => {
    return (
        <React.Fragment>
            {people.map(person => <Person {...person} key={person.id} removePerson={removePerson}/>)}
        </React.Fragment>
    )
}

const Person = ({id, name, removePerson}) => {
    return (
        <div className={"item"}>
            <h4>{name}</h4>
            <button type={"button"} onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}

export default PropDrilling;
