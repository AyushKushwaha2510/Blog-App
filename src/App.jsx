import { useState } from 'react'
import './App.css'
// import LogIn from './components/LogIn'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { PostCard } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      <PostCard/>

    </>
  )
}

export default App
