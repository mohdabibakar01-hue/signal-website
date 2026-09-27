const BASE_URL = window.location.origin;

const signalsList = document.getElementById('signalsList');
const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
const signalForm = document.getElementById('signalForm');
const subscribeForm = document.getElementById('subscribeForm');
const subscriberList = document.getElementById('subscriberList');

const subscribeModal = document.getElementById('subscribeModal');
const adminPanel = document.getElementById('adminPanel');

async function loadSignals() {
  const response = await fetch(`${BASE_URL}/api/signals`);
  const signals = await response.json();

  signalsList.innerHTML = signals.map((signal) => `
    <article class="signal-card">
      <div class="card-top">
        <div class="symbol">${signal.pair}</div>
        <span class="direction ${signal.side.toLowerCase()}">${signal.side}</span>
      </div>
      <div class="signal-grid">
        <div>
          Entry
          <strong>${signal.entry}</strong>
        </div>
        <div>
          Target
          <strong>${signal.target}</strong>
        </div>
        <div>
          Stop
          <strong>${signal.stop}</strong>
        </div>
        <div>
          Confidence
          <strong>${signal.confidence}</strong>
        </div>
      </div>
      <p style="margin-top:16px; color:#a3b0d1;">Status: ${signal.status}</p>
    </article>
  `).join('');
}

async function loadChat() {
  const response = await fetch(`${BASE_URL}/api/chat`);
  const messages = await response.json();

  chatBox.innerHTML = messages.map((msg) => `
    <div class="chat-message ${msg.sender === 'User' ? 'user' : ''}">
      <small>${msg.sender} • ${msg.time}</small>
      <div>${msg.message}</div>
    </div>
  `).join('');

  chatBox.scrollTop = chatBox.scrollHeight;
}

async function loadSubscribers() {
  const response = await fetch(`${BASE_URL}/api/subscribers`);
  const subscribers = await response.json();

  subscriberList.innerHTML = subscribers.map((user) => `
    <div class="subscriber-item">
      <div>
        <strong>${user.name}</strong><br>
        <small>${user.email}</small>
      </div>
      <span>${user.plan}</span>
    </div>
  `).join('');
}

async function createSignal(event) {
  event.preventDefault();

  const payload = {
    pair: document.getElementById('pair').value,
    side: document.getElementById('side').value,
    entry: document.getElementById('entry').value,
    target: document.getElementById('target').value,
    stop: document.getElementById('stop').value,
    status: 'Active',
    confidence: '90%'
  };

  await fetch(`${BASE_URL}/api/signals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  signalForm.reset();
  adminPanel.classList.add('hidden');
  loadSignals();
}

async function subscribe(event) {
  event.preventDefault();

  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    plan: document.getElementById('plan').value
  };

  await fetch(`${BASE_URL}/api/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  subscribeForm.reset();
  subscribeModal.classList.add('hidden');
  loadSubscribers();
}

async function sendChat(event) {
  event.preventDefault();

  const sender = document.getElementById('chatName').value || 'User';
  const message = document.getElementById('chatInput').value.trim();

  if (!message) return;

  await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sender, message })
  });

  document.getElementById('chatInput').value = '';
  loadChat();
}

function openSubscribeModal(plan = 'Pro') {
  document.getElementById('plan').value = plan;
  subscribeModal.classList.remove('hidden');
}

function initEvents() {
  document.getElementById('subscribeBtn').addEventListener('click', () => openSubscribeModal());
  document.getElementById('heroSubscribe').addEventListener('click', () => openSubscribeModal('Pro'));
  document.getElementById('viewSignals').addEventListener('click', () => {
    document.getElementById('signals').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('closeModal').addEventListener('click', () => subscribeModal.classList.add('hidden'));
  document.getElementById('openAdminPanel').addEventListener('click', () => adminPanel.classList.remove('hidden'));
  document.getElementById('closeAdminPanel').addEventListener('click', () => adminPanel.classList.add('hidden'));

  document.querySelectorAll('.plan-btn').forEach((btn) => {
    btn.addEventListener('click', () => openSubscribeModal(btn.dataset.plan));
  });

  subscribeForm.addEventListener('submit', subscribe);
  signalForm.addEventListener('submit', createSignal);
  chatForm.addEventListener('submit', sendChat);
}

initEvents();
loadSignals();
loadChat();
loadSubscribers();
