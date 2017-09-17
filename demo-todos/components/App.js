import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import { connect } from 'react-redux'
import VisibleTodoList from '../containers/VisibleTodoList'
import FecthDemoContainer from '../containers/FecthDemoContainer'

const App = () => (
  <div>
    <h1>Todos Demo</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr/>
    <FecthDemoContainer/>
  </div>
)

export default App
