import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import UserList from './Pages/UserList';
import QueryBuilder from './Pages/QueryBuilder';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-container'>
      <Router>
          <Routes>
            <Route exact path="/" element={<UserList />}/>
            <Route exact path="/queryBuilder" element={<QueryBuilder />} />
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

