# Traffic Genie

Real-time traffic prediction app for Mexican cities.

## Overview

Traffic Genie is an intelligent traffic prediction system that helps users anticipate and navigate congestion in Mexican cities. By combining machine learning with real-time data, it provides actionable traffic insights for better commute planning and reduced travel time.

## Features

- Real-time traffic data collection
- ML-powered congestion predictions
- Interactive dashboard for traffic insights
- Scalable architecture built with Python and Next.js

## Tech Stack

- Frontend: Next.js (React)
- Backend: Python, FastAPI
- Database: PostgreSQL
- Data Source: Google Maps API
- ML Framework: TensorFlow or Scikit-learn

## Prerequisites

Before you begin, make sure you have:

- Python 3.10+
- Node.js 18+
- npm 9+
- PostgreSQL 12+
- A Google Maps API key

## Local Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd TrafficGenie
```

### 2. Set up the backend

```bash
cd traffic-genie/backend
python -m venv .venv
```

On Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

On macOS/Linux:

```bash
source .venv/bin/activate
```

Then install the Python dependencies:

```bash
pip install -r requirements.txt
```

Create a local environment file:

```bash
copy NUL .env
```

Add your configuration values to the file, for example:

```env
GOOGLE_MAPS_API_KEY=your_api_key_here
```

Start the API server:

```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at http://localhost:8000/health.

### 3. Set up the frontend

Open a new terminal and run:

```bash
cd traffic-genie/frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:3000.

## Project Structure

```text
traffic-genie/
├── backend/             # FastAPI backend
│   ├── app/             # Application entrypoint and routes
│   ├── models/          # ML models
│   └── services/        # Data collection and processing
├── frontend/            # Next.js dashboard
│   ├── app/             # App router pages and layout
│   └── public/          # Static assets
└── README.md            # Project documentation
```

## Verification

After both services are running, verify that:

- The backend responds at http://localhost:8000/health
- The frontend loads at http://localhost:3000

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with your improvements.

## License

This project is currently unlicensed. Add a license if you plan to distribute it publicly.

## Contact

For questions or feedback, please reach out to the project team.