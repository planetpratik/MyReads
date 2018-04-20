import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import ShelfCompartment from './ShelfCompartment'

class BookShelf extends Component {

    // As shelf of the book may change over time, books are stored in state rather than in prop.
    // This is single component above all components that needs state in hierarchy.
    // Hence our state should live in this component. It's passed down to childrens as a prop.
    state = {
        books: []
    }

    // Books are fetched after component is inserted into DOM
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            })
        })
    }

    // Handler function for changing book shelf
    onChangeShelf = () => {

    }

    render() {
        const compartments = [
            {type: 'currentlyReading', title: 'Currently Reading'},
            {type: 'wantToRead', title: 'Want to Read'},
            {type: 'read', title: 'Read'}
        ]
        return(
            <div className='list-books-content'>
                { this.state.books.length > 0 &&
                    <div>
                        { compartments.map( (compartment,index) => {
                            const compartmentBooks =this.state.books.filter( (book) =>
                               book.shelf===compartment.type
                            )
                            return(
                                <ShelfCompartment
                                   books={compartmentBooks}
                                   compartmentsList={compartments}
                                   onChangeShelf={this.onChangeShelf}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default BookShelf