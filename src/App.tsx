import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/first_component/slices/Test';
import { Provider } from 'react-redux';
import store from './store';
import IndexContainer from './featrures/index/IndexContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="">
        </header>
        <IndexContainer/>
      </div>
    </Provider>
  );
}

export default App;
