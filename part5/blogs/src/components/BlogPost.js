import React from 'react'
import PropTypes from 'prop-types'
import Togglable from './Togglable'
import { BlogContainer, ButtonSmall } from '../styles'

const BlogPost = ({blog, likeBlog, deleteBlog, deletable}) => {


    return(
        <BlogContainer>
            {blog.title}
            <Togglable showText="view" hideText="hide">
                <br/>
                {blog.author}
                <p>Likes: {blog.likes} <ButtonSmall onClick={likeBlog}>Like</ButtonSmall></p>
                <a href={blog.url} target="_blank" rel="noreferrer">{blog.url}</a>
                { deletable ? <ButtonSmall onClick={deleteBlog}>Delete</ButtonSmall> : <></>}
            </Togglable>
        </BlogContainer>  
    )
}

BlogPost.propTypes = {
    blog: PropTypes.object.isRequired,
    likeBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired,
    deletable: PropTypes.bool
}

export default BlogPost