import React from 'react';
import Home from '../pages/Home';
import Signin from '../pages/signin/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { AuthProvider } from '../hooks/useAuth';
import { RequireAuth } from '../requirements/RequireAuth';
export default function AppRouter(){
    return (
      <AuthProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/signin' element={<Signin />} />
            <Route path="/home" element={ <RequireAuth><Home /></RequireAuth>}/>
            <Route path="/" element={  <RequireAuth><Home /></RequireAuth> }/>
          </Routes>
        </Router>
      </AuthProvider>
    );
}