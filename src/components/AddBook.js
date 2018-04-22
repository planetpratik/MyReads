import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Stateless functional component is used as we are using only render method.
const AddBook = (props) => {
    const {currentBooks} = props
    return (
        <div className='open-search'>
               <Link to={{
                   pathname:'/search',
                   state: {
                       booksFromHomepage: currentBooks
                       }}}/>
        </div>
    )
}

// PropTypes are used to run typechecking on the props for a component
AddBook.PropTypes = {
    currentBooks:PropTypes.array.isRequired
}
export default AddBook