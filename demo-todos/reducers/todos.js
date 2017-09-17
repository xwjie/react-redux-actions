import {
    addTodo,
    toggleTodo
} from '../actions';
import {
    createReducer
} from '../../react-redux-actions';

const todo = (state, action) => {
    switch (action.type) {
        case addTodo.type:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case toggleTodo.type:
            if (state.id !== action.payload) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state
    }
}

//------------------------------------------------
const defaultState = [{
    id: -1,
    text: 'default todo',
    completed: false
}]

const todos = createReducer(defaultState);

todos.handleAction(addTodo, (state, action) => [
    ...state,
    todo(undefined, action)
]);

todos.handleAction(toggleTodo, (state, action) => state.map(t =>
    todo(t, action)
));

export default todos.reducer
