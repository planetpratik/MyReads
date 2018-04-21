import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

// Stateless functional component is used as we are using only render method.
const ShelfCompartment = (props) => {
    const {compartmentIndex,books,onChangeShelf} = props
    return(
        <div>
            <div className="bookshelf-books" key={compartmentIndex}>
                <ol className="books-grid">
                    {books.map( (book) => (
                        <Book
                            key={book.id}
                            book={book}
                            onChangeShelf={onChangeShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
        )
}

// PropTypes are used to run typechecking on the props for a component
ShelfCompartment.PropTypes = {
    compartmentIndex: PropTypes.number.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default ShelfCompartment