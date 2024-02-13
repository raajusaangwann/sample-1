//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import MyNav from './components/navbar';
//import Main from './components/main';
import Home from './components/home';
import Contact from './components/contactUs';
import Help from './components/help';
import Prod from './components/prod'
import SignUp from './components/SignUp';
import Todo from './components/todolist';
import Cart from './components/cart';






function App() {
  return (
    <div className='App'>
      
      <MyNav />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='product' element={<Prod />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<Help />} />
      </Routes>
        
      
    </div>
  );
}

export default App;
