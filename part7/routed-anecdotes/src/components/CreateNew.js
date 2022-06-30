import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateNew = (props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content,
            author,
            info,
            votes: 0
        })
        props.showNotification(`Created new anecdote by ${author}`, 2500)
        //Go back to home page
        navigate('/')
        setContent('')
        setAuthor('')
        setInfo('')
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
                    <input type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    author
                    <input type='text' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    url for more info
                    <input type='text' name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
                </div>
                <button>create</button>
            </form>
        </div>
    )

}

export default CreateNew