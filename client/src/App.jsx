import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

const App = () => {
  const [user, setUser] = useState(false); // Start with user as false (not logged in)

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectRoute user={user}>
                <Home />
              </ProtectRoute>
            } 
          />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/chat/:chatId" 
            element={
              <ProtectRoute user={user}>
                <Chat />
              </ProtectRoute>
            } 
          />
          <Route 
            path="/groups" 
            element={
              <ProtectRoute user={user}>
                <Groups />
              </ProtectRoute>
            } 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
