import Togglable from "./Togglable"

import { BlogContainer, ButtonSmall } from "../styles"

const BlogPost = ({blog, likeBlog}) => {
  return(
    <BlogContainer>
      {blog.title}
      <Togglable showText="view" hideText="hide">
        <br/>
        {blog.author}
        <p>Likes: {blog.likes} <ButtonSmall onClick={likeBlog}>Like</ButtonSmall></p>
        <a href={blog.url} target="_blank" rel="noreferrer">{blog.url}</a>
      </Togglable>
    </BlogContainer>  
  )
}

export default BlogPost