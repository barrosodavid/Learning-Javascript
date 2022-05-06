import { useState } from 'react';
import PersonForm from './components/PersonForm'
import SearchFilter from './components/SearchFilter'
import PhoneBookView from './components/PhoneBookView'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const addPerson = (newPerson) => {
    setPeople(people.concat(newPerson));
  }

  const [searchFilter, setSearchFilter] = useState('');

  const changeSearchFilter = (filter) => {
    setSearchFilter(filter);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} people={people}></PersonForm>

      <br />
      <SearchFilter changeAppSearchFilter={changeSearchFilter} />

      <h2>Numbers</h2>
      <PhoneBookView people={people} searchfilter={searchFilter} />
    </div>
  )
}

export default App;