import phonebook from '../services/phonebook';

const PhoneBookView = ({ people, setPeople, searchfilter }) => {
    const filteredPeople = people.filter((person) => {
        if (person.name.toLowerCase().indexOf(searchfilter.toLowerCase()) > -1) {
            return person;
        }
    });

    const deleteEntry = id => {
        const deletedPerson = people.find((person) => person.id === id);
        if (window.confirm(`Are you sure you want to delete ${deletedPerson.name}?`)){
            phonebook.remove(id).then(() => {
                setPeople(people.filter(person => person.id !== id));
            }).catch(error => {
                alert(`Couldn't remove ${deletedPerson.name} from the phonebook: ${error}`);
            });
        }
    }
    
    return (
        <div>
            {filteredPeople.map((person) => <div key={person.id}><PhoneBookEntry  person={person}></PhoneBookEntry><button onClick={() => deleteEntry(person.id)}>Delete</button><br /></div>)}
        </div>
    );
}

const PhoneBookEntry = ({ person }) => {
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.number}</p>
        </div>
    )
}

export default PhoneBookView;