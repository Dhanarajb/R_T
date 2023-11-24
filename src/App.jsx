import React from 'react';
import './App.css';
import Counter from './component/Counter';
import BookList from './component/DisplayList';
import FetchApi from './component/FetchApi';
import MessageComp from './component/MessageComp';
import Toggle from './component/Toggle';
import About from './component/route/About';
import Home from './component/route/Home';
import UserList from './component/user/UserList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];

  return (
    <>
      <BookList />
      <Toggle />
      <Counter />
      <UserList users={users} />
      <MessageComp isSuccess={false} />
      <FetchApi />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        {/* Use Link components for navigation */}
        <Link to='/'>Home</Link> <br />
        <Link to='/about'>About</Link>
      </BrowserRouter>
    </>
  );
}

export default App;
