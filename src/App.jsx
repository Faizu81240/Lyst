import './App.css'
import bg from './assets/Tunnel.svg'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import LoginPage from './pages/LoginPage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/home" element = {<HomePage/>} />
        <Route path="/search" element = {<SearchPage/>} />
        <Route path="/login" element = {<LoginPage/>} />
      </Routes>
    </Router> 
  )
}

export default App;
