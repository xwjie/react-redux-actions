import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import fetchdemo from './fetchdemo'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  fetchdemo
})

export default todoApp
