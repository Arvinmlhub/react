import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Avatar from './component/Avator';
import TodoList from './component/TodoList';
import Profile from './component/Profile';
import PackingList from './component/PackingList';
import List from './component/List';
import FilterList from './component/FilterList';
import Gallery from './component/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/> 
    {/*
   <Avatar/>
   <List/>
   <Profile/>   <FilterList
   />


   <Gallery/>

   */}
  </React.StrictMode>
);



reportWebVitals();
