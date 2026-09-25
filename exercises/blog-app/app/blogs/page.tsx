import { getBlogs } from "../services/blogs"

const Blogs = () => {
  const blogs = getBlogs()
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h4>{blog.title}</h4>
            <p>Auth: {blog.author}; &#x1F44D;{blog.likes}.{" "}
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blogs
