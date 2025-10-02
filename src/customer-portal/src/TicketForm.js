import React, { useState } from 'react';
import './TicketForm.css';

function TicketForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, description }),
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setDescription('');
    } catch (error) {
      console.error('Error submitting ticket:', error);
    }
  };

  if (submitted) {
    return (
      <div className="ticket-form-container">
        <h2>Thank you!</h2>
        <p>Your ticket has been submitted successfully.</p>
        <button onClick={() => setSubmitted(false)} className="submit-btn">
          Submit Another Ticket
        </button>
      </div>
    );
  }

  return (
    <div className="ticket-form-container">
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default TicketForm;