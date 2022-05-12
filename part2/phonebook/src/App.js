import { useState, useEffect } from 'react';
import phonebook from './services/phonebook';
import PersonForm from './components/PersonForm'
import SearchFilter from './components/SearchFilter'
import PhoneBookView from './components/PhoneBookView'

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect( () => {
    phonebook.getAll().then((data) => {
      setPeople(data);
    });
  }, []);

  const [searchFilter, setSearchFilter] = useState('');

  const changeSearchFilter = (filter) => {
    setSearchFilter(filter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm people={people} setPeople={setPeople}></PersonForm>

      <br />
      <SearchFilter changeAppSearchFilter={changeSearchFilter} />

      <h2>Numbers</h2>
      <PhoneBookView people={people} setPeople={setPeople} searchfilter={searchFilter} />
    </div>
  )
}

export default App;