const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
                return {
                    persons : state.persons.concat(newPerson)
                }
        case 'DELETE_PERSON':
            const updatedPersons = state.persons.filter(person => person.id !== action.id);
            return {
                persons : updatedPersons
            }
    }
    return state;
}

export default reducer;