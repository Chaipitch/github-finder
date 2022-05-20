import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="App">
          <Navbar/>
        </div>
      
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
