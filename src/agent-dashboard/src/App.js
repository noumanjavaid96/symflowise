import React, { useState, useEffect } from 'react';
import './App.css';
import TicketList from './TicketList';
import TicketDetails from './TicketDetails';
import AnalyticsDashboard from './AnalyticsDashboard';

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/tickets');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleBackToList = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Agent Dashboard</h1>
      </header>
      <main>
        {selectedTicket ? (
          <TicketDetails ticket={selectedTicket} onBack={handleBackToList} />
        ) : (
          <>
            <AnalyticsDashboard tickets={tickets} />
            <TicketList tickets={tickets} onTicketSelect={handleTicketSelect} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;