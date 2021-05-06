import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
