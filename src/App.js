import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
