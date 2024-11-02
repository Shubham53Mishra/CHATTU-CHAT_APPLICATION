 // eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from 'react'; // Keep this import to use JSX
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home')); // Lazy load Home component
const Login = lazy(() => import('./pages/Login')); // Lazy load Login component
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
 


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/groups" element={<Groups />} />    
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
