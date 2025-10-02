import React, { useState } from 'react';
import './ChatWidget.css';

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        const botMessage = { text: data.reply, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        const errorMessage = { text: 'Error connecting to the server.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    }
  };

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <h3>Live Chat</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatWidget;