import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import New from "./pages/New";
import Header from "./components/Header";
import List from "./pages/List";
import View from "./pages/View";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
    const noHeaderPathnames = ["/signup", "/", "/home"]
    const noFooterPathnames = ["/signup", "/"]

  return (
    <div className="App">
      {!noHeaderPathnames.includes(location.pathname) && <Header />}
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<New />} />
          <Route path="/view" element={<View />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </ContentWrapper>
      {!noFooterPathnames.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

const ContentWrapper = styled.div`
  padding: 1.5rem;
`;
