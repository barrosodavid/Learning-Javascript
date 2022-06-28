import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const content = e.target.content.value
        e.target.content.value = ''
        dispatch(createAnecdote(content))
        dispatch(showNotification(`Created new note: '${content}'`, 2500))
    }
    return (
    <div><h2>create new</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="content" />
            </div>
            <button type="submit">create</button>
        </form>
    </div>
    )
}

export default NewAnecdote