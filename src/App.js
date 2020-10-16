import React from 'react'

import Header from './components/header/header.component'
import Search from './pages/search/search.component';
import Selves from './components/shelves/shelves.component';

import SearchButton from './components/searchButton/searchButton.component';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  updatePage = bin => {
    this.setState({ showSearchPage: bin });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (

          <Search showSearchPage={this.updatePage} />
        ) : (
            <div className="list-books">
              <Header />
              <Selves />

              <SearchButton showSearchPage={this.updatePage} />

            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
