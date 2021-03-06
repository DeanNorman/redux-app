const initState = {
    todos: [
        { id: 1, name: 'create store', isComplete: true },
        { id: 2, name: 'load state', isComplete: true },
        { id: 3, name: 'handle state', isComplete: false },
    ],
    currentTodo: '',
}

const TODO_ADD = 'TODO_ADD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({
    type: CURRENT_UPDATE,
    payload: val,
})

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return { ...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE :
            return {...state, currentTodo: action.payload }
        default:
            return state        
    }
}