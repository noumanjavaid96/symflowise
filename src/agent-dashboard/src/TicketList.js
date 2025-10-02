import React from 'react';
import './TicketList.css';

function TicketList({ tickets, onTicketSelect }) {
  return (
    <div className="ticket-list-container">
      <h2>Incoming Tickets</h2>
      <table className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id} onClick={() => onTicketSelect(ticket)}>
              <td>{ticket.id}</td>
              <td>{ticket.customer}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;