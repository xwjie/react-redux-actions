import {
    createAction
} from '../../react-redux-actions';

let nextTodoId = 0

export const setVisibilityFilter = createAction();

export const addTodo = createAction((text) => ({
    id: nextTodoId++,
    text
}))

export const toggleTodo = createAction();
