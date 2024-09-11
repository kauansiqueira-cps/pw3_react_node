import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import CreatePost from './pages/CreatePost/CreatePost'


function App() {

  return (
    <>
      <div>
        <NavBar/>
        <CreatePost />
        <Footer/>

        
      </div>
    </>
  )
}

export default App
