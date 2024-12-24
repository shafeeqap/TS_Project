import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
    return (
        <nav>
            <Link to="/todoList">Todo List</Link>
        </nav>
    )
}

export default Navigation