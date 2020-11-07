import React, {useEffect, useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const MultipleInputs = () => {
    const [person, setPerson] = useState({
        firstName: '',
        email: '',
        age: ''
    });

    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')) || []);

    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people));
    }, [people]);

    const handleSubmit = e => {
        e.preventDefault();
        const {firstName, email, age} = person;
        if (firstName && email && age) {
            const person = {id: new Date(), firstName, email, age};
            setPeople([...people, person]);
            setPerson({firstName: '', email: '', age: ''});
        } else {
            alert('Invalid input(s)');
        }
    };

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value});
    }

    const removePerson = id => {
        setPeople(prevState => prevState.filter(person => person.id !== id));
    }
    return (
        <React.Fragment>
            <h1>multiple inputs</h1>
            <article>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor={"firstName"}>Name: </label>
                        <input type="text" id={"firstName"} name={"firstName"} value={person.firstName}
                               onChange={e => handleChange(e)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor={"email"}>Email: </label>
                        <input type="email" id={"email"} name={"email"} value={person.email}
                               onChange={e => handleChange(e)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor={"age"}>Age: </label>
                        <input type="number" min="0" step={"1"} id={"age"} name={"age"} value={person.age}
                               onChange={e => handleChange(e)}/>
                    </div>
                    <button type={"submit"} onClick={e => handleSubmit(e)}>Add Person</button>
                </form>
                {people.map(person => {
                    const {id, firstName, email, age} = person;
                    return (
                        <div key={id} className={"item"}>
                            <h4>{firstName}</h4>
                            <p>{age}</p>
                            <p>{email}</p>
                            <button type="button" onClick={() => removePerson(id)}>Remove</button>
                        </div>
                    );
                })}
            </article>
        </React.Fragment>
    );
};

export default MultipleInputs;
