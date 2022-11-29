import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <>
        <section className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Login and start uploading Posts</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </>
    </>
  )
}

export default Login
