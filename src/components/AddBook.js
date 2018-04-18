import React from 'react'
import { Link } from 'react-router-dom'

// Stateless functional component is used as we are using only render method.
const AddBook = () => {
    return (
        <div className='open-search'>
               <Link to='/search'>Add New Book</Link>
        </div>
    )
}

export default AddBook