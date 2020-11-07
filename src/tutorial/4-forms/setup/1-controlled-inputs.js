import React, {useEffect, useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState(JSON.parse(localStorage.getItem('people')) || []);

    const handleSubmit = e => {
        e.preventDefault();
        if (firstName && email) {
            const person = {id: new Date(), firstName, email};
            setPeople(prevState => [...prevState, person]);
            setFirstName('');
            setEmail('');
        } else {
            alert('Invalid input(s)');
        }

    };

    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people));
    }, [people]);

    const removePerson = id => {
        setPeople(prevState => prevState.filter(person => person.id !== id));
    }
    return (
        <React.Fragment>
            <h1>controlled inputs</h1>
            <article>
                <form className="form">
                    <div className="form-control">
                        <label htmlFor={"firstName"}>Name: </label>
                        <input type="text" id={"firstName"} name={"firstName"} value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor={"email"}>Email: </label>
                        <input type="email" id={"email"} name={"email"} value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button type={"submit"} onClick={e => handleSubmit(e)}>Add Person</button>
                </form>
                {people.map(person => {
                    const {id, firstName, email} = person;
                    return (
                        <div key={id} className={"item"}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <button type="button" onClick={() => removePerson(id)}>Remove</button>
                        </div>
                    );
                })}
            </article>
        </React.Fragment>
    );
};

export default ControlledInputs;
