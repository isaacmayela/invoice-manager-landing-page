import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'


function App() {

  return (
    <>
      <div className='w-full bg-[#1e213b] flex justify-center items-center overflow-hidden'>
        <Router>
          <Routes>             
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Home/>} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
