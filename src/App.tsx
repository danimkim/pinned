import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Search from './pages/Search';
import New from './pages/New';
import Header from './components/Header';
import List from './pages/List';
import View from './pages/View';
import Login from './pages/Login';
import Auth from './pages/Auth';
import { auth } from './fbase';
import Signup from './pages/Signup';
import EditProfile from './components/EditProfile';
import NotFound from './pages/NotFound';
import { useRef, useState } from 'react';

function App() {
  const location = useLocation();
  const noHeaderPathnames = ['/auth', '/', '/home'];
  const noFooterPathnames = ['/auth', '/', '/login'];

  const contentInner = useRef<HTMLDivElement>(null);
  const [contentInnerHeight, setContentInnerHeight] = useState<number>(
    window.innerHeight,
  );
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  const heightChange = window.innerHeight - headerHeight - footerHeight;
  console.log('heightChange', heightChange);

  return (
    <>
      {!noHeaderPathnames.includes(location.pathname) && auth.currentUser && (
        <Header setHeaderHeight={setHeaderHeight} />
      )}
      <ContentWrapper ref={contentInner}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="edit" element={<EditProfile />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<New />} />
          <Route path="/view" element={<View />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentWrapper>
      {!noFooterPathnames.includes(location.pathname) && auth.currentUser && (
        <Footer setFooterHeight={setFooterHeight} />
      )}
    </>
  );
}

export default App;

const ContentWrapper = styled.div`
  padding: 2.5rem;
  max-width: 640px;
  margin: 0 auto;
  border: 1px solid red;
`;
