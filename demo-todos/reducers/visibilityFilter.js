import {createReducer} from '../../react-redux-actions';
import {setVisibilityFilter} from '../actions'

const visibilityFilter = createReducer('SHOW_ALL');

visibilityFilter.handleAction(setVisibilityFilter, (state, action) => action.payload);

export default visibilityFilter.reducer;
