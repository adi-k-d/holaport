import { useEffect } from "react"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import PostForm from "../components/PostForm"
import PostItem from "../components/PostItem"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { db } from "../firebase"

function Home() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts"),
      (snapShot) => {
        let list = []
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setPosts(list)
      },
      (error) => {
        console.log(error)
      }
    )

    return () => {
      unsub()
    }
  }, [])

  return (
    <>
      <section className="heading">
        <p>Posts</p>
      </section>

      <section className="content">
        {posts && posts.length > 0 ? (
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <>
            {currentUser ? (
              <h3>No Posts Yet</h3>
            ) : (
              <h3>Please Sign in to Upload Post</h3>
            )}
          </>
        )}
      </section>
    </>
  )
}

export default Home
