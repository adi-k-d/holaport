import {
  collection,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostForm from "../components/PostForm"
import PostItem from "../components/PostItem"
import { AuthContext } from "../context/AuthContext"
import { db } from "../firebase"

function Dashboard() {
  const navigate = useNavigate()

  const [posts, setposts] = useState([])

  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <section className="heading">
        <h1>Welcome {currentUser.email}</h1>
        <p>Write A Post</p>
      </section>

      <PostForm />
    </>
  )
}

export default Dashboard
