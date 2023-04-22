import React, { Component } from 'react';
import { debounce } from 'lodash';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handelSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className="form" onSubmit={this.handelSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            onChange={debounce(this.handleInputChange, 1000)}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
