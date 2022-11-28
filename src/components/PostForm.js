import { useState } from "react"

function PostForm() {
  const [text, setText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    setText("")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">New Post</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Upload Post
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm
