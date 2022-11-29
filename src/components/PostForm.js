import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "../firebase"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

function PostForm() {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (e) {
    }
    const docRef = await addDoc(collection(db, "posts"), {
      name: currentUser.uid,
      text: text,
      title: title,
      email: currentUser.email,
      createdAt: serverTimestamp(),
    })

    setText("")
    setTitle("")
    navigate("/")
  }

  return (
    <section className="form">
      <h2>New Post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="text">Title</label>
          <input
            type="title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="text">Body</label>

          <textarea
            name="text"
            cols="40"
            rows="5"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" onClick={onSubmit} type="button">
            Upload Post
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm
