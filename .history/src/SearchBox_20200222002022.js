import React, {Fragment} from 'react';

const SearchBox = () => {
    return (
        <Fragment className='pa3 ba b--green bg-lightest-blue'>
            <input 
                type='search' 
                placeholder='search robots' />
        </Fragment>
        
    );
};

export default SearchBox;