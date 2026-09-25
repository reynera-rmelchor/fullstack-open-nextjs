import { createBlog } from "../../actions/blogs"

const NewBlog = () => {
  return (
    <div>
      <h2>Create a new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            Title{" "}
            <input style={{ marginLeft: '16px' }} type="text" name="title" required />{" "}
          </label>
        </div>
        <div>
          <label>
            Author{" "}
            <input type="text" name="author" required />{" "}
          </label>
        </div>
        <div>
          <label>
            Url{" "}
            <input style={{ marginLeft: '24px' }} type="text" name="url" />{" "}
          </label>
        </div>
        <div><br />
          <button style={{ marginLeft: '164px' }} type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewBlog