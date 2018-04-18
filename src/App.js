import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import './App.css'

// Stateless functional component is used as we are using only render method.
const BooksApp = () => {
      return (
        <div className="app">
            <Route exact path="/" component={ HomePage }/>
            <Route path="/search" component={ SearchPage }/>
        </div>
      )
}

export default BooksApp
