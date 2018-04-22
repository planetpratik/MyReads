import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import ShelfCompartment from './ShelfCompartment'
import AddBook from './AddBook'

class BookShelf extends Component {

    // As shelf of the book may change over time, books are stored in state rather than in prop.
    // This is single component above all components that needs state in hierarchy.
    // Hence our state should live in this component. It's passed down to children as a prop.
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
    onChangeShelf = (book, newShelf) => {
        BooksAPI.update(book,newShelf).then((result) =>{
            console.log('Update response', result)
            // Change the shelf property of the book object to new Shelf.
            book.shelf = newShelf
            //  Get the previous state book array without current book & add it to the new updated books array
            var updatedBooks = this.state.books.filter((resultBook) =>resultBook.id !== book.id)
            updatedBooks.push(book)
            // Set the new state with Updated Books array
            this.setState({books: updatedBooks})
        })
    }

    render() {
        const compartments = [
            {type: 'currentlyReading', title: 'Currently Reading'},
            {type: 'wantToRead', title: 'Want to Read'},
            {type: 'read', title: 'Read'}
        ]
        return(
            <div>
            <div className='list-books-content'>
                { this.state.books.length > 0 &&
                    <div>
                        { compartments.map( (compartment,index) => {
                            const compartmentBooks =this.state.books.filter( (book) =>
                            book.shelf===compartment.type
                         )
                            return(
                                <div className="bookshelf" key={index}>
                                    <h2 className="bookshelf-title">{compartment.title}</h2>
                                        <ShelfCompartment
                                            key={index}
                                            books={compartmentBooks}
                                            compartmentsList={compartments}
                                            onChangeShelf={this.onChangeShelf}
                                        />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            <AddBook
                currentBooks={this.state.books}
            />
            </div>
        )
    }
}
export default BookShelf