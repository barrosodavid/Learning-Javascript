import { useState } from 'react';
import phonebook from '../services/phonebook';

const PersonForm = ({ setPeople, people }) => {

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const nameAlreadyExists = (name) => {
        const names = people.map((elem) => elem.name);
        return names.includes(name);
    };

    const numberAlreadyExists = (number) => {
        const numbers = people.map((elem) => elem.number);
        return numbers.includes(number);
    };

    const generateNewId = () => {
        if (people.length < 1)
            return 0;

        let max = 0;
        people.forEach(person => {
            max = Math.max(person.id, max);
        });
        return max + 1;
    }

    const handleNameInput = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberInput = (event) => {
        setNewNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newName.length === 0 || newNumber.length === 0) {
            alert("You must fill both fields");
        } else if (nameAlreadyExists(newName)) {
            alert(`${newName} is already added to the phonebook`);
        } else if (numberAlreadyExists(newNumber)) {
            alert(`${newNumber} is already added to the phonebook`);
        } else {
            
            const newEntry = {
                name: newName,
                number: newNumber,
                id: generateNewId()
            };
            phonebook.create(newEntry).then((newPerson) => {
                setPeople(people.concat(newPerson))
                setNewName("");
                setNewNumber("");
            }).catch( error => {
                alert("Couldn't add person ", error);
            });
        }
        console.log("Button clicked");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameInput} />
                    phone number: <input value={newNumber} onChange={handleNumberInput} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm;