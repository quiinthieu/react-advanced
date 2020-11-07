import React, {useReducer, useState} from 'react';
import Modal from './Modal';
import {data} from '../../../data';
import {reducer} from "./reducer";

const defaultState = {
    people: data,
    showModal: false,
    modalContent: 'Hello World'
}

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);


    const handleSubmit = e => {
        e.preventDefault();
        if (name) {
            const payload = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_ITEM', payload});
            setName('');
        } else {
            dispatch({type: 'NO_VALUE'});
        }
    }

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    }

    return (
        <React.Fragment>
            {state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
            <form onSubmit={handleSubmit} className={"form"}>
                <div>
                    <input type={"text"} value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <button type={"submit"}>Add Person</button>
            </form>
            {state.people.map(person => {
                return (
                    <div key={person.id} className={"item"}>
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({type: 'REMOVE_PERSON', payload: person.id})}>Remove</button>
                    </div>
                )
            })}
        </React.Fragment>

    );
};

export default Index;
