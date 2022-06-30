const Anecdote = ({anecdote}) => {
    return (
        <div key={anecdote.id}>
            {Object.keys(anecdote).map((key, index) => <div key={index}><h2>{key}: </h2><p>{anecdote[key]}</p></div>)}
            <br />
        </div>
    )
}

export default Anecdote