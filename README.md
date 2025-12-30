# 🇿🇦 ZA-BPO AI Agent Dashboard

A high-performance, AI-driven Business Process Outsourcing (BPO) dashboard specifically engineered for the South African workforce and business landscape. This platform leverages cutting-edge Generative AI to transform raw operational data into actionable executive strategy.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000)

## 🚀 Core Features

### 🤖 AI Strategy Engine
Integrated with **Google Gemini 3**, the dashboard provides real-time "Strategy Insights." It automatically analyzes workforce KPIs, identifies bottlenecks, and suggests growth levers tailored to the ZA market context.
- **Model:** `gemini-3-flash-preview`
- **Functionality:** Automated executive summaries and productivity forecasting.

### 📊 Real-time Performance Analytics
Comprehensive visualization of BPO throughput using **Recharts**.
- **KPI Tracking:** Monitor inquiries handled, data entry volume, VA hours, and CSAT scores at a glance.
- **Trend Analysis:** Weekly performance heatmaps and bar charts to identify peak operational hours.
- **Activity Stream:** Live feed of agent activities and system updates for full transparency.

### 🛠️ Enterprise Infrastructure
- **Secure Access:** Robust authentication flow with protected routing.
- **Team Management:** Workspace administration for inviting and managing regional team members.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop viewing.
- **Modern UI/UX:** Premium dark-mode interface built with Tailwind CSS, featuring smooth transitions and enterprise aesthetics.

## 🛠️ Tech Stack

- **Frontend:** React 18 (Hooks, Context, Functional Components)
- **Styling:** Tailwind CSS (Custom enterprise theme)
- **AI Integration:** @google/genai (Gemini Pro/Flash API)
- **Visualization:** Recharts
- **Routing:** React Router 6
- **Icons:** Custom SVG Components

## 📦 Project Structure

```text
├── components/
│   ├── dashboard/   # KPI Cards, AI Insights, Charts
│   ├── layout/      # Sidebar, Header, Protected Layout
│   └── ui/          # Atomic components (Button, Card, Input)
├── pages/           # Main route views
├── constants.ts     # Mock data and configuration
├── types.ts         # TypeScript interfaces
└── index.tsx        # Application entry point
```

## 🚦 Getting Started

### Prerequisites
- Node.js environment
- A valid Google Gemini API Key (configured in environment variables as `API_KEY`)

### Installation
1. Clone the repository.
2. Install dependencies (standard React environment).
3. Set your environment variable:
   ```bash
   export API_KEY='your_gemini_api_key_here'
   ```
4. Launch the development server.

## 🎯 Target Audience
This solution is designed for:
- South African BPO Owners looking to automate operational reporting.
- Workforce Managers overseeing distributed VA (Virtual Assistant) teams.
- International clients outsourcing to South Africa who require high-transparency performance monitoring.

---
*Built with ❤️ for the South African BPO ecosystem.*