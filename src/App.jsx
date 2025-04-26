import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="app-header">
          <h1>Dashboard V2</h1>
          <input
            type="text"
            placeholder="Search anything..."
            className="search-bar"
          />
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </Provider>
  );
}

export default App;

