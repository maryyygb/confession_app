/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
// import './Chat.css'

import Home from "./pages/Home"
import Agreement from './pages/Agreement';
import Reminder from './pages/Reminder';
import ChatRoom from './pages/ChatRoom';

import { Routes, Route } from 'react-router';

function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/agreement" element={<Agreement/>}/>
          <Route path="/reminder" element={<Reminder/>}/>
          <Route path="/chatRoom" element={<ChatRoom/>}/>
        </Routes>
    </div>
  )
}

export default App