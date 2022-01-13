import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Home from './components/Home';
import Header from './components/Header';
import UserHome from './screens/UserHome';
import UploadBook from './screens/dataScreens/uploadBook';

function App() {
  return (
    <Router> 
    <Header />
    <main >
        <Routes>
          
          <Route path="/login" exact element={<LoginScreen />} /> 
          <Route path="/signup" exact element={<SignUpScreen />} /> 
          <Route path="/userhome" exact element={<UserHome />} /> 
          <Route path="/userhome/uploadbook" exact element={<UploadBook />} /> 
          
          <Route path="/" exact element={<Home />} /> 
       
        </Routes> 
    </main>
    </Router>
  );
}

export default App;
