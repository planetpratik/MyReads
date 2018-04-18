import React from 'react'
import PropTypes from 'prop-types'

// Stateless functional component is used as we are using only render method.
// Title is immutable property, hence it's passed as a prop rather than using state.
const HomePageTitle = (props) => {
    return (
        <div className='list-books-title'>
            <h1>{props.title}</h1>
        </div>
    )
}

// Default prop value is set using .defaultProps property
HomePageTitle.defaultProps = {
    title: 'MyReads'
}

// PropTypes are used to run typechecking on the props for a component
HomePageTitle.PropTypes = {
    title: PropTypes.string.isRequired
}

export default HomePageTitle