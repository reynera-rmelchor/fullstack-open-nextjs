import { createNote } from "../../actions/notes"

const NewNote = () => {
  return (
    <div>
      <h2>Create a new note</h2>
      <form action={createNote}>
        <div>
          <label>
            Important{" "}
            <input type="checkbox" name="important" />
          </label>
        </div>
        <div>
          <label>
            Content{" "}
            <input type="text" name="content" required />{" "}
            <button type="submit">Create</button>
          </label>
        </div>
      </form>
    </div>
  )
}

export default NewNote