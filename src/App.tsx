import './App.css'
import ContentSection from './components/ContentSection'
import Introduction from './components/Introduction'


function App() {
  return (
    <div className='flex flex-col justify-center'>
      <Introduction/>
      <ContentSection/>
    </div>
  )
}

export default App
