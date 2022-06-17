import {useState} from 'react'
import {Button, Form, Input} from '../styles'

const BlogForm = ({addBlog}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setURL] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addBlog({title,author,url})
        setTitle('')
        setAuthor('')
        setURL('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                title: <Input type="text" onChange={({target}) => setTitle(target.value)} value={title}></Input>
            </div>
            <div>
                author: <Input type="text" onChange={({target}) => setAuthor(target.value)} value={author}></Input>
            </div>
            <div>
                url: <Input type="text" onChange={({target}) => setURL(target.value)} value={url}></Input>
            </div>
            <Button type="submit">Create</Button>
        </Form>
    )
}

export default BlogForm