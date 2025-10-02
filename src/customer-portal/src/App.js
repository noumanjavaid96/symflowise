import React from 'react';
import './App.css';
import TicketForm from './TicketForm';
import ChatWidget from './ChatWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Support Portal</h1>
      </header>
      <main>
        <TicketForm />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;