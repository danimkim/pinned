import './App.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Search from './pages/Search';
import New from './pages/New';
import Header from './components/Header';
import List from './pages/List';

function App() {
  return (
    <div className="App">
    <Header />
    <ContentWrapper>
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/new" element={<New />} />
            <Route path="/list" element={<List />} />
        </Routes>
    </ContentWrapper>
    <Footer />
    </div>
  );
}

export default App;

const ContentWrapper = styled.div`
    padding: 1.5rem;
`
