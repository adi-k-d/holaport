import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

import { useEffect, useState } from "react"
import { db } from "../firebase"
function PostItem({ post }) {
  const [modal, setmodal] = useState(false)
  const [data, setData] = useState([])
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const { currentUser } = useContext(AuthContext)
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id))
      setData(data.filter((item) => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const openModal = () => {
    setmodal(!modal)
  }
  const handleUpdate = async (id) => {
    try {
      await setDoc(doc(db, "posts", id), {
        text: text,
        title: title,
      })
      setmodal(!modal)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      {currentUser && (
        <button className="close" onClick={() => handleDelete(post.id)}>
          X
        </button>
      )}

      {!modal && currentUser && (
        <button className="editbtn" onClick={() => openModal()}>
          Edit Post
        </button>
      )}

      {modal && (
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
            <button
              className="btn btn-block"
              onClick={() => handleUpdate(post.id)}
              type="button"
            >
              Edit Post
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PostItem
