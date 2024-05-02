import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Login from '../../components/login';
import Signup from '../../components/signup';
import App from '../config/App'
import TodoList from '../../components/to-doList';
import ConfirmationEmail from '../../components/confirmationEmail';

export const RouteConfig=()=>(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={
          <>
            {/* <Navbar /> */}
            <App />
          </>
        }
        />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/confirmation" element={<ConfirmationEmail />} />


    </Routes>
  </BrowserRouter>
  );

