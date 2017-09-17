import {dataLoading, dataLoadDone} from '../actions/fetchactions';
import {createReducer} from '../../react-redux-actions';

//------------------------------------------------
const defaultState = {
	data: {
		data:'no data'
	},
	msg: 'no request'
};


const todos = createReducer(defaultState);

todos.handleAction(dataLoading, (state , action) => Object.assign(state, {}, {data: {}, msg: 'start fecth data, key=' + action.payload}));

todos.handleAction(dataLoadDone, (state , action) => Object.assign(state, {}, {data: action.payload, msg: 'fecth data done.'}));

export default todos.reducer
