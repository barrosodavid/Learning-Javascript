import {useState} from 'react'

const BlogForm = ({addBlog}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addBlog({title,author,url})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                title: <input type="text" onChange={({target}) => setTitle(target.value)} value={title}></input>
            </div>
            <div>
                author: <input type="text" onChange={({target}) => setAuthor(target.value)} value={author}></input>
            </div>
            <div>
                url: <input type="text" onChange={({target}) => setURL(target.value)} value={url}></input>
            </div>
            <input type="submit" value="Create"></input>
        </form>
    )
}

export default BlogForm