import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PostForm from "../components/PostForm"
import PostItem from "../components/PostItem"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import userEvent from "@testing-library/user-event"

function Dashboard() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

  const { posts } = {}

  return (
    <>
      <section className="heading">
        <h1>Welcome {currentUser.email}</h1>
        <p>Your Posts</p>
      </section>

      <PostForm />

      <section className="content">
        {posts && posts.length > 0 ? (
          <div className="posts">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <h3>You do not have any posts yet</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
