import { useState } from 'react';

const SearchFilter = ({ changeAppSearchFilter }) => {

    const [searchFilter, setSearchFilter] = useState('');

    const handleSearchFilter = (event) => {
        setSearchFilter(event.target.value);
        changeAppSearchFilter(event.target.value);
    };

    return (<div>
        search: <input value={searchFilter} onChange={handleSearchFilter} />
    </div>);
}

export default SearchFilter;