import React from 'react';
import './TicketDetails.css';

const mockConversation = [
  { sender: 'customer', text: 'I am having trouble logging into my account.' },
  { sender: 'agent', text: 'I can help with that. Have you tried resetting your password?' },
  { sender: 'customer', text: 'Yes, but I did not receive the reset email.' },
];

function TicketDetails({ ticket, onBack }) {
  if (!ticket) return null;

  return (
    <div className="ticket-details-container">
      <button onClick={onBack} className="back-btn">Back to List</button>
      <h2>Ticket Details</h2>
      <div className="ticket-info">
        <p><strong>ID:</strong> {ticket.id}</p>
        <p><strong>Customer:</strong> {ticket.customer}</p>
        <p><strong>Subject:</strong> {ticket.subject}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
      </div>
      <div className="conversation-history">
        <h3>Conversation History</h3>
        {mockConversation.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketDetails;