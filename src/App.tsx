import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Register from './pages/auth/Register';
import Measure from './pages/Measure';
import Recommend from './pages/Recommend';
import Result from './pages/Result';
import Main from './pages/Main';
import "./styles/styles.css";
import All from './pages/Brand/All';
import Nike from './pages/Brand/Nike';
import Adidas from './pages/Brand/Adidas';
import Puma from './pages/Brand/Puma';
import Mizuno from './pages/Brand/Mizuno';
import Others from './pages/Brand/Others';

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/main' element={<Main />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/register' element={<Register />} />
      <Route path='/mesure' element={<Measure />} />
      <Route path='/recommend' element={<Recommend />} />
      <Route path='/result' element={<Result />} />
      <Route path='/all' element={<All />} />
      <Route path='/nike' element={<Nike />} />
      <Route path='/adidas' element={<Adidas />} />
      <Route path='/puma' element={<Puma />} />
      <Route path='/mizuno' element={<Mizuno />} />
      <Route path='/others' element={<Others />} />
    </Routes>
  )
}

export default App;
