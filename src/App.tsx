import './App.css'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Profile from './components/Profile'



function App() {
  return (
    <div className='flex w-full flex-col justify-center'>
      <Introduction/>
      <ContentSection/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default App
