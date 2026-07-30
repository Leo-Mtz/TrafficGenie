# Traffic Genie

Real-time traffic prediction app for Mexican cities.

## Overview

Traffic Genie is an intelligent traffic prediction system that helps users anticipate and navigate congestion in Mexican cities. By leveraging machine learning and real-time data, we provide actionable traffic insights to improve commute planning and reduce travel time.

## Features

- **Real-time Data Collection**: Hourly traffic data via Google Maps API
- **ML-Powered Predictions**: Trained models that predict congestion levels
- **Interactive Dashboard**: Next.js-based UI for viewing traffic insights
- **Scalable Architecture**: Microservices design with Python/FastAPI backend

## Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Python, FastAPI
- **Database**: PostgreSQL
- **Data Source**: Google Maps API
- **ML Framework**: TensorFlow/Scikit-learn (or equivalent)

## Architecture

```
Google Maps API → Data Collection → ML Model → FastAPI Microservice → PostgreSQL
                                                           ↓
                                                    Next.js Dashboard
```

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- PostgreSQL 12+
- Google Maps API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd traffic-genie
```

2. Set up the backend:
```bash
cd backend
pip install -r requirements.txt
```

3. Set up the frontend:
```bash
cd frontend
npm install
```

4. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run the application:
```bash
# Terminal 1: Start FastAPI backend
python -m uvicorn main:app --reload

# Terminal 2: Start Next.js frontend
npm run dev
```

## Usage

Access the dashboard at `http://localhost:3000` to view real-time traffic predictions for supported Mexican cities.

## Project Structure

```
traffic-genie/
├── backend/              # FastAPI microservice
│   ├── models/          # ML models
│   ├── api/             # API endpoints
│   └── services/        # Data collection & processing
├── frontend/            # Next.js dashboard
│   ├── pages/
│   ├── components/
│   └── styles/
└── database/            # PostgreSQL schemas
```

## Contributing

Contributions are welcome! Please submit pull requests or open issues for bug reports and feature requests.

## License

[Add your license here]

## Contact

For questions or feedback, please reach out to the team.