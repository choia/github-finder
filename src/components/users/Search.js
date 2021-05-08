import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.searchAlert('Please enter text', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search...'
            className='input'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className='btn btn-dark btn-block'>Search</button>
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    searchAlert: PropTypes.func.isRequired,
  };
}

export default Search;
