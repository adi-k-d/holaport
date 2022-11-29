import { FaSignInAlt, FaSignOutAlt, FaUser, FaUpload } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function Header() {
  const navigate = useNavigate()

  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const onLogout = () => {
    setCurrentUser(null)
    navigate("/")
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Daily Posts</Link>
      </div>
      <ul>
        {currentUser ? (
          <>
            <li>
              <button className="btn" onClick={() => signOut(auth)}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => navigate("/upload")}>
                <FaUpload /> Upload Post
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
