import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = ({ target }) => {
    this.setState({ query: target.value.trim() });
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
        <form className={css.SearchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <i className="fa fa-search"></i>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            value={this.state.query}
            onChange={this.handleInputChange}
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
