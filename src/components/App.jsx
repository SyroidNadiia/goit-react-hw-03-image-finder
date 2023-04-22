import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchAsync } from 'api/fetch';
import React, { Component } from 'react';

const INITIAL_STATE = {
  query: '',
  visibleModal: false,
  isLoading: false,
  isError: false,
  pictures: [],
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSearchSubmit = searchTerm => {
    this.setState({ query: searchTerm });
  };

  handelFetchImg = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetchAsync(this.state.query);
      this.setState({ pictures: response, isLoading: false });
    } catch {
      this.setState({ isError: true, isLoading: false });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.handelFetchImg(this.state.query);
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}></Searchbar>
        {this.state.pictures.length !== 0 && (
          <ImageGallery pictures={this.state.pictures}></ImageGallery>
        )}
      </>
    );
  }
}

export default App;
