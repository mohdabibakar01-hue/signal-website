const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const signals = [
  {
    id: 1,
    pair: 'BTC/USDT',
    side: 'BUY',
    entry: '64,800',
    target: '67,200',
    stop: '63,700',
    status: 'Active',
    confidence: '92%',
    createdAt: '2026-09-27T09:15:00Z'
  },
  {
    id: 2,
    pair: 'ETH/USDT',
    side: 'SELL',
    entry: '3,410',
    target: '3,250',
    stop: '3,540',
    status: 'Watching',
    confidence: '88%',
    createdAt: '2026-09-27T08:05:00Z'
  },
  {
    id: 3,
    pair: 'BNB/USDT',
    side: 'BUY',
    entry: '580',
    target: '610',
    stop: '560',
    status: 'Active',
    confidence: '90%',
    createdAt: '2026-09-27T07:00:00Z'
  }
];

const subscribers = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@example.com',
    plan: 'Pro',
    joinedAt: '2026-09-20'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john@example.com',
    plan: 'VIP',
    joinedAt: '2026-09-22'
  }
];

const chats = [
  { id: 1, sender: 'Admin', message: 'Welcome to the VIP channel!', time: '09:00' },
  { id: 2, sender: 'User', message: 'When is the next BTC signal?', time: '09:05' }
];

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Signal website backend is running' });
});

app.get('/api/signals', (req, res) => {
  res.json(signals);
});

app.post('/api/signals', (req, res) => {
  const { pair, side, entry, target, stop, status, confidence } = req.body;

  if (!pair || !side || !entry || !target || !stop) {
    return res.status(400).json({ error: 'Missing required signal fields.' });
  }

  const newSignal = {
    id: Date.now(),
    pair,
    side,
    entry,
    target,
    stop,
    status: status || 'Active',
    confidence: confidence || '85%',
    createdAt: new Date().toISOString()
  };

  signals.unshift(newSignal);
  res.status(201).json(newSignal);
});

app.get('/api/subscribers', (req, res) => {
  res.json(subscribers);
});

app.post('/api/subscribe', (req, res) => {
  const { name, email, plan } = req.body;

  if (!name || !email || !plan) {
    return res.status(400).json({ error: 'Name, email, and plan are required.' });
  }

  const newSub = {
    id: Date.now(),
    name,
    email,
    plan,
    joinedAt: new Date().toISOString().slice(0, 10)
  };

  subscribers.unshift(newSub);
  res.status(201).json(newSub);
});

app.get('/api/chat', (req, res) => {
  res.json(chats);
});

app.post('/api/chat', (req, res) => {
  const { sender, message } = req.body;

  if (!sender || !message) {
    return res.status(400).json({ error: 'Sender and message required.' });
  }

  const newMessage = {
    id: Date.now(),
    sender,
    message,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  chats.push(newMessage);
  res.status(201).json(newMessage);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Signal website running at http://localhost:${PORT}`);
});
