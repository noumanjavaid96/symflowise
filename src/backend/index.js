const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const knowledgeBasePath = path.join(__dirname, 'knowledge-base.json');
const knowledgeBase = JSON.parse(fs.readFileSync(knowledgeBasePath, 'utf-8'));

let tickets = [
  { id: 1, customer: 'John Doe', subject: 'Login Issue', status: 'Open', description: 'I cannot log in to my account.', conversation: [] },
  { id: 2, customer: 'Jane Smith', subject: 'Billing Question', status: 'In Progress', description: 'I have a question about my last bill.', conversation: [] },
];
let nextTicketId = 3;

app.get('/api/tickets', (req, res) => {
  res.json(tickets);
});

app.post('/api/tickets', (req, res) => {
  const { name, email, description } = req.body;
  const newTicket = {
    id: nextTicketId++,
    customer: name,
    email,
    subject: description.substring(0, 20) + '...',
    status: 'Open',
    description,
    conversation: [{ sender: 'customer', text: description }],
  };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const keywords = Object.keys(knowledgeBase.keywords);
  let response = knowledgeBase.keywords.default;
  let answered = false;

  for (const keyword of keywords) {
    if (message.toLowerCase().includes(keyword)) {
      response = knowledgeBase.keywords[keyword];
      answered = true;
      break;
    }
  }

  if (!answered) {
    const newTicket = {
      id: nextTicketId++,
      customer: 'Chat User',
      email: 'N/A',
      subject: 'Chat Escalation: ' + message.substring(0, 20) + '...',
      status: 'Open',
      description: message,
      conversation: [{ sender: 'customer', text: message }],
    };
    tickets.push(newTicket);
  }

  res.json({ reply: response });
});

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});