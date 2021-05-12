import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const Search = ({ searchAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      searchAlert('Please enter text', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          className='input'
          value={text}
          onChange={onChange}
        />
        <button className='btn btn-dark btn-block'>Search</button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchAlert: PropTypes.func.isRequired,
};

export default Search;
