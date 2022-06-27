import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification, removeNotification } from '../reducers/notificationReducer'

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
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(addVote(id))
        dispatch(showNotification(`You gave a vote to the anecdote: '${content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 2500)
    }

    //Returns sorted anecdote array by votes in descending order
    const sortedAnecdotes = () => [...anecdotes].sort((a, b) => b.votes - a.votes)


    return (<div>
        <h2>Anecdotes</h2>
        {sortedAnecdotes().map(anecdote =>
            <Anecdote key={anecdote.id}
                content={anecdote.content}
                votes={anecdote.votes}
                onClick={() => vote(anecdote.id, anecdote.content)}
            />
        )}
    </div>)
}

export default Anecdotes