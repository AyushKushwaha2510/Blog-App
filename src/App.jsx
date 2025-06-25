import { useEffect, useState } from 'react'
import './index.css'
// import LogIn from './components/LogIn'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Footer, Header, PostCard } from './components'
import { ThemeProvider } from './contexts/theme'
import { Outlet } from 'react-router-dom'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer/>
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      {/* <PostCard/> */}
     
    </ThemeProvider>
  )

}


export default App
