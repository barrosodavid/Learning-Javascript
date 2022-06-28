import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, onClick }) => {
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={onClick}>vote</button>
            </div>
        </div>
    )
}

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter.filter).toLowerCase()

    //Returns filtered array of anecdotes
    const getFilteredAnecdotes = (anecdotes) =>  
        anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter) > -1)

    //Returns sorted anecdote array by votes in descending order
    const sortByVotes = (anecdotes) => [...anecdotes].sort((a, b) => b.votes - a.votes)

    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(voteAnecdote(id))
        dispatch(showNotification(`You gave a vote to the anecdote: '${content}'`, 2500))
    }



    return (<div>
        <h2>Anecdotes</h2>
        {sortByVotes(getFilteredAnecdotes(anecdotes)).map(anecdote =>
            <Anecdote key={anecdote.id}
                content={anecdote.content}
                votes={anecdote.votes}
                onClick={() => vote(anecdote.id, anecdote.content)}
            />
        )}
    </div>)
}

export default Anecdotes