import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/first_component/slices/Test';
import { Provider } from 'react-redux';
import store from './store';
import IndexContainer from './featrures/index/IndexContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './featrures/login/Login';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<IndexContainer/>} />
            <Route path="/login" element={<Login />} />
            {/* 當上方的path都沒有被匹配到 <NoMatch> 就會被渲染 */}
            {/* <Route component={NoMatch} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
