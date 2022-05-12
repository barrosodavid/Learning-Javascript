const PhoneBookView = ({ people, searchfilter }) => {
    const filteredPeople = people.filter((person) => {
        if (person.name.toLowerCase().indexOf(searchfilter.toLowerCase()) > -1) {
            return person;
        }
    });
    
    return (
        <div>
            {filteredPeople.map((elem) => <PhoneBookEntry key={elem.id} person={elem}></PhoneBookEntry>)}
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