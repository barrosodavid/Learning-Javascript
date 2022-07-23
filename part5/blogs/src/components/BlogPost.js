import React from 'react'
import PropTypes from 'prop-types'
import Togglable from './Togglable'
import { BlogContainer, ButtonSmall } from '../styles'

const BlogPost = ({blog, likeBlog, deleteBlog, deletable}) => {


    return(
        <BlogContainer className='blogContainer'>
            {blog.title}{'\n'}
            {blog.author}
            <Togglable showText="view" hideText="hide">
                <br/>
                <p>Likes: {blog.likes} <ButtonSmall onClick={likeBlog}>Like</ButtonSmall></p>
                <a href={blog.url} target="_blank" rel="noreferrer">{blog.url}</a>
                { deletable ? <ButtonSmall onClick={deleteBlog}>Delete</ButtonSmall> : <></>}
            </Togglable>
        </BlogContainer>  
    )
}

BlogPost.propTypes = {
    blog: PropTypes.object.isRequired,
    likeBlog: PropTypes.func,
    deleteBlog: PropTypes.func,
    deletable: PropTypes.bool
}

export default BlogPost