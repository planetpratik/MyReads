import React from 'react'
import HomePageTitle from './HomePageTitle'
import BookShelf from './BookShelf'

// Stateless functional component is used as we are using only render method.
const HomePage = () => {
    return(
        <div className="list-books">
           <HomePageTitle/>
           <BookShelf/>
        </div>
    )
}

export default HomePage