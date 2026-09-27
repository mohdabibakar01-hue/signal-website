* { box-sizing: border-box; }

:root {
  --bg: #0b1020;
  --bg-soft: #111827;
  --panel: #141d32;
  --card: #1b243a;
  --card-2: #0f172a;
  --primary: #4f8cff;
  --primary-2: #7c3aed;
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --text: #edf2ff;
  --muted: #a3b0d1;
  --border: rgba(255, 255, 255, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #070d1d 0%, #111827 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(8, 12, 20, 0.8);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: white;
}

.menu {
  display: flex;
  gap: 28px;
  color: var(--muted);
}

.btn {
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: white;
  box-shadow: 0 12px 30px rgba(91, 101, 255, 0.35);
}

.btn-secondary {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--text);
}

.hero {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #7cc2ff;
  font-size: 12px;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.4rem, 4vw, 4.5rem);
  line-height: 1.03;
  margin: 0;
  letter-spacing: -0.05em;
}

.lead {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 620px;
  margin: 22px 0;
}

.cta-row {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  color: var(--muted);
}

.hero-card {
  background: linear-gradient(160deg, rgba(79, 140, 255, 0.15), rgba(124, 58, 237, 0.14));
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 26px;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.market-box {
  width: min(100%, 360px);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 22px;
}

.market-top,
.profit-row,
.stat-row,
.trade-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-pill {
  background: rgba(34, 197, 94, 0.15);
  color: var(--success);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
}

.market-price {
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 22px 0 18px;
  font-weight: 800;
}

.profit-row {
  padding: 12px 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.section-head.center {
  justify-content: center;
  text-align: center;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.7rem);
}

.signals,
.plans,
.dashboard,
.chat-section {
  padding: 40px 0 30px;
}

.signals-grid,
.plans-grid,
.dashboard-grid {
  display: grid;
  gap: 20px;
}

.signals-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.signal-card,
.plan-card,
.dashboard-panel,
.chat-box {
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
}

.signal-card {
  padding: 20px;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 20px;
}

.symbol {
  font-size: 1.2rem;
  font-weight: 800;
}

.direction {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.direction.buy {
  background: rgba(34, 197, 94, 0.15);
  color: var(--success);
}

.direction.sell {
  background: rgba(239, 68, 68, 0.15);
  color: var(--danger);
}

.signal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  color: var(--muted);
  font-size: 0.95rem;
}

.signal-grid strong {
  display: block;
  color: var(--text);
  margin-top: 4px;
}

.plans-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.plan-card {
  padding: 24px 20px;
  position: relative;
}

.plan-card.featured {
  border-color: rgba(127, 86, 255, 0.9);
  background: linear-gradient(180deg, rgba(124, 58, 237, 0.12), rgba(17, 24, 39, 0.9));
}

.popular {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d7c8ff;
  background: rgba(124, 58, 237, 0.18);
  padding: 6px 8px;
  border-radius: 999px;
}

.plan-card h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

.price {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 10px 0 18px;
}

.price span {
  font-size: 0.8rem;
  color: var(--muted);
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.dashboard-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.dashboard-panel {
  padding: 22px;
}

.dashboard-panel h3 {
  margin-top: 0;
}

.stat-row {
  padding: 12px 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

.trade-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.trade-list li {
  padding: 12px 0;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

.chat-shell {
  max-width: 900px;
}

.chat-box {
  padding: 18px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-message {
  max-width: 75%;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 12px 14px;
  border-radius: 14px;
}

.chat-message.user {
  align-self: flex-end;
  background: rgba(79, 140, 255, 0.15);
}

.chat-message small {
  color: var(--muted);
  display: block;
  margin-bottom: 5px;
}

.chat-form {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 170px 1fr auto;
  gap: 12px;
}

.chat-form input,
#subscribeForm input,
#subscribeForm select,
.admin-form input,
.admin-form select {
  width: 100%;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.75);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
}

.modal,
.admin-panel {
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 15, 0.72);
  display: grid;
  place-items: center;
  z-index: 50;
}

.hidden {
  display: none;
}

.modal-card,
.admin-card {
  width: min(540px, calc(100% - 32px));
  background: #0f172a;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 22px;
}

.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.modal-head h3 {
  margin: 0;
}

.close-btn {
  border: none;
  background: rgba(255,255,255,0.05);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.4rem;
}

#subscribeForm,
.admin-form {
  display: grid;
  gap: 16px;
}

#subscribeForm label,
.admin-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

.admin-panel .admin-card {
  width: min(700px, calc(100% - 28px));
}

.admin-stats {
  margin-top: 26px;
}

.subscriber-list {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.subscriber-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
}

@media (max-width: 820px) {
  .hero-grid,
  .chat-form {
    grid-template-columns: 1fr;
  }

  .menu {
    display: none;
  }

  .cta-row {
    flex-direction: column;
  }
}
