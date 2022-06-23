import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Button, Form, Input, FormContainer, CloseButton} from '../styles'

const BlogForm = ({addBlog, blogFormVisible, setBlogFormVisible}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setURL] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addBlog({title,author,url})
        setTitle('')
        setAuthor('')
        setURL('')
        setBlogFormVisible(false)
    }

    if(blogFormVisible){
        return (
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <CloseButton onClick={() => setBlogFormVisible(false)}>X</CloseButton>
                    <h2>Post a Blog</h2>
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
                    <Button onClick={() => setBlogFormVisible(false)}>Cancel</Button>
                </Form>
            </FormContainer>
        )
    }
    return (<></>)
}

BlogForm.propTypes = {
    addBlog: PropTypes.func.isRequired,
    blogFormVisible: PropTypes.bool.isRequired,
    setBlogFormVisible: PropTypes.func.isRequired
}

export default BlogForm