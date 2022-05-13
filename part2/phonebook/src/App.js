import { useState, useEffect } from 'react';
import phonebook from './services/phonebook';
import PersonForm from './components/PersonForm'
import SearchFilter from './components/SearchFilter'
import PhoneBookView from './components/PhoneBookView'
import {ErrorNotification, SuccessNotification} from './components/Notification';

const App = () => {
  const [people, setPeople] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

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
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />
      <PersonForm people={people} setPeople={setPeople} setSuccess={setSuccessMessage} setError={setErrorMessage}></PersonForm>

      <br />
      <SearchFilter changeAppSearchFilter={changeSearchFilter} />

      <h2>Numbers</h2>
      <PhoneBookView people={people} setPeople={setPeople} searchfilter={searchFilter} setSuccess={setSuccessMessage} setError={setErrorMessage} />
    </div>
  )
}

export default App;