#  Stock AI — Intelligent Stock Market Analysis Platform

An AI-powered financial analysis platform that acts as your personal market analyst, available 24/7. It pulls **real-time stock data**, analyzes it on the fly, and lets you chat with it or generate full financial reports — no guesswork involved.

---

## ✨ Features

- **AI Financial Agent (Chat):** Ask anything about stocks — the AI uses real tools to fetch live data, calculate ROI, and surface top market movers.
- **Live Stock Dashboard:** Build a personal Watchlist and visualize 60-day price history with interactive charts.
- **Saved Financial Reports:** Turn any AI conversation into a saved, reusable report you can revisit anytime.
- **Full-Stack Monolith:** Frontend and backend live in the same codebase — no separate server setup needed.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start/latest) (React + Server Functions) |
| Language | TypeScript |
| AI Model | Google Gemini 1.5 Flash via `@ai-sdk/google` |
| Stock Data | [Polygon.io](https://polygon.io/) API |
| Database | PostgreSQL (with in-memory fallback for local dev) |
| UI | Tailwind CSS + shadcn/ui + Recharts |

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Copy `.env.example` to `.env` and fill in your keys:
```env
# Required — powers the AI chat
GEMINI_API_KEY="your_gemini_key_here"

# Optional — enables live stock data (mock data used if omitted)
POLYGON_API_KEY="your_polygon_key_here"

# Optional — persistent storage (in-memory used if omitted)
DATABASE_URL="postgres://user:password@localhost:5432/dbname"
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🏗 Architecture

The app is built as a **Full-Stack Monolith** using TanStack Start. Server Functions are co-located with the frontend but never sent to the browser — any file ending in `.server.ts` stays server-side only.

```
Browser (React)
    ↓
Server Functions (TanStack Start + Nitro)
    ↓                        ↓
Polygon.io API          Google Gemini AI
(Stock Data)            (Analysis + Chat)
    ↓
PostgreSQL / In-Memory DB
```

**AI Tools available to the agent:**

| Tool | Description |
|---|---|
| `getStockHistory` | Fetches 60-day price history for a ticker |
| `getTickerSnapshot` | Gets current price + daily change |
| `getTopGainers` | Lists today's top-performing stocks |
| `calculateROI` | Computes return on investment |
| `saveReport` | Saves a full analysis as a report |

---

## 📝 Developer Notes

-Migrated to direct PostgreSQL via Node.js driver for a leaner, faster backend.
---

*Built with passion to make stock analysis accessible to everyone. 🚀*