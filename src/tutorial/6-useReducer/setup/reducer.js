// reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': return {...state, people: [...state.people, action.payload], modalContent: 'Person added', showModal: true};
        case 'NO_VALUE': return {...state, showModal: true, modalContent: 'Please enter value'};
        case 'CLOSE_MODAL': return {...state, showModal: false};
        case 'REMOVE_PERSON': return {...state, people: state.people.filter(person => person.id !== action.payload), showModal: true, modalContent: 'Removed person'};
        default: return state;
    }
}