import {
    createAction
} from '../../react-redux-actions';

export const dataLoading = createAction();

export const dataLoadDone = createAction();

export const fetchData = (key) => {
    return dispatch => {
        dispatch(dataLoading(key));

        return fetch(`http://localhost:8080/plm/resttest/${key}`)
            .then(response => response.json())
            .then(json => dispatch(dataLoadDone(json)))
            .catch((error) => {
                console.error(error);
            });
    }
}
