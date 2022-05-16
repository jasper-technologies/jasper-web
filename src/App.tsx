import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from 'pages/Auth';
import Home from 'pages/Auth/Home';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import ForgotPassword from 'pages/Auth/ForgotPassword'
import Onboarding from 'pages/Onboarding';
import Dashboard from 'pages/Dashboard';
import ResetPassword from 'pages/Auth/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Auth />} >
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password' element={<ResetPassword />} />

        </Route>
        <Route path='/onboarding' element={<Onboarding/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
