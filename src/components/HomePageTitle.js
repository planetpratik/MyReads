import React from 'react'
import PropTypes from 'prop-types'
const HomePageTitle = (props) => {
    return (
        <div className="list-books-title">
            <h1>{props.title}</h1>
        </div>
    )
}
HomePageTitle.defaultProps = {
    title: "MyReads"
}
HomePageTitle.PropTypes = {
    title: PropTypes.string.isRequired
}

export default HomePageTitle