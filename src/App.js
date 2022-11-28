import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
