import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/todoList' element={<TodoList />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  )
}

export default App