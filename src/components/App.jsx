import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchAsync } from 'api/fetch';
import React, { Component } from 'react';
import Notiflix from 'notiflix';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

class App extends Component {
  state = {
    query: '',
    isLoading: false,
    isError: false,
    isShowModal: false,
    isShowButton: false,
    page: 1,
    pictures: [],
    selectedPicture: null,
  };

  handleSearchSubmit = searchTerm => {
    this.setState({ query: searchTerm, page: 1, pictures: [] });
  };

  handelFetchImg = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { totalHits, hits } = await fetchAsync(query, page);

      if (hits.length === 0) {
        Notiflix.Notify.failure('Sorry. There are no images ...');
      }

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits],
        isShowButton: page < Math.ceil(totalHits / hits.length),
      }));
    } catch {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query !== '') {
      this.handelFetchImg(this.state.query);
    }
  }

  onLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.handelFetchImg();
      }
    );
  };

  handleImageClick = id => {
    const selectedPicture = this.state.pictures.find(
      picture => picture.id === id
    );
    this.setState({ selectedPicture, isShowModal: true });
  };

  handleCloseModal = () => {
    this.setState({ selectedId: null, isShowModal: false });
  };

  render() {
    const { pictures, isLoading, isShowModal, isShowButton, selectedPicture } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}></Searchbar>
        {pictures.length !== 0 && (
          <ImageGallery
            pictures={pictures}
            onClick={this.handleImageClick}
          ></ImageGallery>
        )}

        {isLoading && <Loader></Loader>}
        {isShowModal && (
          <Modal
            src={selectedPicture.largeImageURL}
            alt={selectedPicture.pageURL}
            onClose={this.handleCloseModal}
          />
        )}
        {isShowButton && (
          <Button isLoading={isLoading} onLoadMore={this.onLoadMore}></Button>
        )}
      </>
    );
  }
}

export default App;
