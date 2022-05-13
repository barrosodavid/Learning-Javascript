import { useState } from 'react';
import phonebook from '../services/phonebook';

const PersonForm = ({ setPeople, people , setSuccess, setError}) => {

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
            if (window.confirm(`${newName} is already added, do you want to change its phone number?`)){
                const person = people.find(person => person.name === newName)
                const changedPerson = { ...person, number: newNumber }
                phonebook.update(person.id, changedPerson).then(data => {
                    setPeople(people.map(e => e.id !== person.id ? e : data ));
                    setNewName("");
                    setNewNumber("");
                    setSuccess(`Changed phone number of person ${person.name}`)
                    setTimeout(() => {
                        setSuccess(null)
                    }, 2000)
                }).catch(error => {
                    setError(`Couldn't change the person ${changedPerson.name}, they were deleted`)
                    setPeople(people.filter(n => n.id !== changedPerson.id))
                    setNewName("");
                    setNewNumber("");
                    setTimeout(() => {
                        setError(null)
                    }, 2000);
                });
            }
        } else if (numberAlreadyExists(newNumber)) {
            setError(`${newNumber} number is already added to the phonebook`)
            setTimeout(() => {
                setError(null)
            }, 2000)
        } else {
            const newEntry = {
                name: newName,
                number: newNumber,
                id: generateNewId()
            };
            phonebook.create(newEntry).then((newPerson) => {
                setPeople(people.concat(newPerson));
                setNewName("");
                setNewNumber("");
                setSuccess(`Added ${newPerson.name} to phonebook`);
                setTimeout(() => {
                    setSuccess(null)
                }, 2000)
            }).catch( error => {
                setError(`Couldn't add ${newName} to the phonebook`)
                setTimeout(() => {
                    setError(null)
                }, 2000)
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