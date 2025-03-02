import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About from './pages/home/about/About'
import Common from './pages/home/common/Common'
import Intro from './pages/home/intro/Intro'
import Services from './pages/home/services/Services'

function App() {

  return (
    <>
    <Navbar />
    <Intro />
    <About />
    <Services />
    <Common />
    <Footer />
    
    </>
  )
}

export default App
