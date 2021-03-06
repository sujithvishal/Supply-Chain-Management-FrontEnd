import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/navbar/navbar.js'
import Footer from './components/footer/footer.js'
import UserDash from './components/user-dashboard.js'
import AdminDash from './components/admin-dashboard.js'
import AdminIn from './pages/AdminIn.js'
import {useState} from 'react';

function App() {
  const [accessToken, setAccessToken] = useState(""); 
  const [userID, setUserID] = useState("");
  const [wid, setWid] = useState("");
  return (
    <div className="App" style={{backgroundColor:'#EFF8FF'}}>
      
      <Routes>
    <Route path='/' element={<Home token={accessToken} setToken={setAccessToken}/>} />
    <Route path='/admin' element={<AdminIn token={accessToken} setToken={setAccessToken} id={userID} setId={setUserID} wid={wid} setWid={setWid}/>} />
    <Route path='/admin-dashboard' element={<AdminDash token={accessToken} setToken={setAccessToken} id={userID} setId={setUserID} wid={wid} setWid={setWid}/> } />
    <Route path='/sign-in' element={<SignIn token={accessToken} setToken={setAccessToken} id={userID} setId={setUserID}/>} />
    <Route path='/sign-up' element={<SignUp token={accessToken} setToken={setAccessToken} id={userID} setId={setUserID}/>} />
    <Route path='/user-dashboard' element={<UserDash token={accessToken} setToken={setAccessToken} id={userID} setId={setUserID}/>} /> 
    </Routes>
  <Footer />
  </div>
  );
}

export default App;
