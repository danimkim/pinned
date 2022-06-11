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
import { useEffect, useState } from 'react';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const noHeaderPathnames = ['/auth', '/', '/home'];
  const noFooterPathnames = ['/auth', '/', '/login'];

  // firebase가 초기화 될때, 계정이 생성되었을때, 로그인, 로그아웃 됐을때 currentUser의 상태를 알려준다.
  useEffect(() => {
    // 일종의 event listener 역할을 한다.
    // 계정 생성 버튼을 눌렀거나, 로그인을 했거나, 이미 로그인 되어 있는 상태에서 firebase가 초기화하는 것을 끝냈을때
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Container>
          {!noHeaderPathnames.includes(location.pathname) &&
            auth.currentUser && <Header />}
          <ContentWrapper>
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
          {!noFooterPathnames.includes(location.pathname) &&
            auth.currentUser && <Footer />}
        </Container>
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;

const ContentWrapper = styled.div`
  padding: 2.5rem;
  max-width: 640px;
  margin: 0 auto;
`;

const Container = styled.div`
  border: 1px solid red;
  height: 100dvh;
`;
