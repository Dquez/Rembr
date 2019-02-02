import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render () {
        return (
            <div className='form-group'>
            <input className='form-control' {...this.props} />
          </div>
        )
    }



}

SearchBar.props = {
    name: PropTypes.string,
    placeholder: PropTypes.string
}
export default SearchBar;