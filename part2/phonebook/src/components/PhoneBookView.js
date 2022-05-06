const PhoneBookView = ({ people, searchfilter }) => {
    const peopleStartingWithFilter = people.filter((person) => {
        return person.name.toLowerCase().startsWith(searchfilter.toLowerCase());
    });
    return (
        <div>
            {peopleStartingWithFilter.map((elem) => <PhoneBookEntry key={elem.id} person={elem}></PhoneBookEntry>)}
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