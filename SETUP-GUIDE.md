# 🏢 VIHI IT Solutions - HR Time Tracking System

## 📋 Complete Setup & Integration Guide

This guide covers the complete setup of both the Next.js frontend and Express backend for the HR Time Tracking System.

---

## 📁 Project Structure

```
company-web/
├── backend/                    # Express.js API Server
│   ├── src/
│   │   ├── controllers/       # Business logic
│   │   ├── models/           # Database schemas
│   │   ├── routes/           # API endpoints
│   │   ├── middleware/       # Auth, error handling
│   │   ├── utils/           # Helper functions
│   │   ├── config/          # Configuration
│   │   └── index.js         # Server entry point
│   ├── .env                 # Backend environment variables
│   ├── package.json
│   └── README.md
├── src/                       # Next.js Frontend
│   ├── app/                  # Pages (App Router)
│   ├── components/           # React components
│   ├── lib/
│   │   └── api.js           # API client
│   └── theme/
├── .env.local                # Frontend environment variables
├── package.json
└── SETUP-GUIDE.md           # This file
```

---

## 🚀 Quick Start (Development)

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ..
npm install
```

### Step 2: Configure Environment Variables

**Backend** (`backend/.env`):
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vihi-hr-system
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 3: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend runs on: `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
✅ Frontend runs on: `http://localhost:3000`

### Step 4: Test the Connection

Open: `http://localhost:3000/test-api`

This page provides:
- ✅ Health check
- ✅ User registration test
- ✅ Login test
- ✅ Activity creation test

---

## 🗄️ MongoDB Atlas Setup

1. **Create Account**: Go to https://www.mongodb.com/cloud/atlas
2. **Create Cluster**: 
   - Choose Free Tier (M0)
   - Select region closest to you
   - Name: `vihi-hr-cluster`

3. **Create Database User**:
   - Username: `vihi_admin`
   - Password: (generate strong password)
   - Privileges: Read and write to any database

4. **Configure Network Access**:
   - Add IP: `0.0.0.0/0` (for development)
   - Or your specific IP address

5. **Get Connection String**:
   ```
   mongodb+srv://vihi_admin:<password>@cluster.mongodb.net/vihi-hr-system?retryWrites=true&w=majority
   ```
   - Replace `<password>` with your actual password
   - Add to `backend/.env`

---

## 📡 API Endpoints Reference

### Authentication
```http
POST /api/users/register    # Register new employee
POST /api/users/login        # Login and get JWT token
```

### User Management
```http
GET    /api/users            # Get all users (Admin)
GET    /api/users/:id        # Get user by ID
GET    /api/users/profile    # Get current user profile
PUT    /api/users/:id        # Update user
DELETE /api/users/:id        # Delete user (Admin)
```

### Activity Tracking
```http
POST   /api/activity                    # Create activity record
GET    /api/activity                    # Get all activities (Admin)
GET    /api/activity/user/:employeeId   # Get user activities
GET    /api/activity/stats/:employeeId  # Get statistics
DELETE /api/activity/:id                # Delete activity (Admin)
```

---

## 🧪 Testing with Postman/Thunder Client

### 1. Register a Test User

```http
POST http://localhost:5000/api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@vihi.com",
  "password": "password123",
  "employeeId": "VIHI001",
  "role": "employee",
  "department": "Technology",
  "position": "Software Engineer"
}
```

### 2. Login

```http
POST http://localhost:5000/api/users/login
Content-Type: application/json

{
  "email": "john@vihi.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {...},
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

Copy the `token` for next requests.

### 3. Get Profile (Protected Route)

```http
GET http://localhost:5000/api/users/profile
Authorization: Bearer <your-token-here>
```

### 4. Create Activity Record

```http
POST http://localhost:5000/api/activity
Authorization: Bearer <your-token-here>
Content-Type: application/json

{
  "employeeId": "VIHI001",
  "date": "2025-11-13",
  "activeTime": 28800,
  "idleTime": 3600,
  "applications": [
    {
      "name": "VS Code",
      "duration": 14400,
      "category": "productive"
    }
  ],
  "websites": [
    {
      "url": "https://github.com",
      "domain": "github.com",
      "duration": 7200,
      "category": "productive"
    }
  ],
  "deviceInfo": {
    "hostname": "LAPTOP-01",
    "os": "Windows 11",
    "ipAddress": "192.168.1.100"
  }
}
```

---

## 🐍 Python Client Integration

Your Python time tracking agent will send activity data to the backend.

### Python Example

```python
import requests
from datetime import datetime

# Configuration
API_URL = "http://localhost:5000/api/activity"
EMPLOYEE_ID = "VIHI001"
TOKEN = "your-jwt-token-here"  # Get from login

# Headers
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

# Activity data
activity_data = {
    "employeeId": EMPLOYEE_ID,
    "date": datetime.now().isoformat(),
    "activeTime": 28800,  # 8 hours in seconds
    "idleTime": 3600,     # 1 hour in seconds
    "applications": [
        {
            "name": "VS Code",
            "duration": 14400,
            "category": "productive"
        },
        {
            "name": "Chrome",
            "duration": 10800,
            "category": "neutral"
        },
        {
            "name": "Slack",
            "duration": 3600,
            "category": "neutral"
        }
    ],
    "websites": [
        {
            "url": "https://github.com",
            "domain": "github.com",
            "duration": 7200,
            "category": "productive"
        },
        {
            "url": "https://stackoverflow.com",
            "domain": "stackoverflow.com",
            "duration": 3600,
            "category": "productive"
        }
    ],
    "deviceInfo": {
        "hostname": "VIHI-LAPTOP-01",
        "os": "Windows 11",
        "ipAddress": "192.168.1.100"
    }
}

# Send data
try:
    response = requests.post(API_URL, json=activity_data, headers=headers)
    response.raise_for_status()
    print("✅ Activity data sent successfully")
    print(response.json())
except requests.exceptions.RequestException as e:
    print(f"❌ Error: {e}")
```

---

## 🚢 Deployment Guide

### Deploy Backend to Render.com

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Add HR backend"
   git push origin HRM_Integration
   ```

2. **Create Render Account**: https://render.com

3. **Create New Web Service**:
   - Connect GitHub repository
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node

4. **Add Environment Variables**:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=<your-mongodb-atlas-uri>
   JWT_SECRET=<strong-secret-key>
   JWT_EXPIRE=30d
   FRONTEND_URL=https://your-app.vercel.app
   ```

5. **Deploy** and copy the backend URL (e.g., `https://vihi-hr-backend.onrender.com`)

### Deploy Frontend to Vercel

1. **Update `.env.local`**:
   ```env
   NEXT_PUBLIC_API_URL=https://vihi-hr-backend.onrender.com
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```
   or connect via Vercel dashboard

3. **Add Environment Variable** in Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://vihi-hr-backend.onrender.com
   ```

---

## 🔐 Security Checklist

- ✅ All passwords hashed with bcrypt
- ✅ JWT tokens with expiration
- ✅ CORS configured for specific origin
- ✅ Helmet.js security headers
- ✅ Input validation on all endpoints
- ✅ Role-based access control (RBAC)
- ✅ MongoDB injection protection
- ✅ Environment variables for secrets

---

## 📊 Database Schema

### User Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: "admin" | "employee" | "manager",
  employeeId: String (unique),
  department: String,
  position: String,
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Activity Collection
```javascript
{
  user: ObjectId (ref: User),
  employeeId: String,
  date: Date,
  activeTime: Number (seconds),
  idleTime: Number (seconds),
  totalTime: Number (calculated),
  applications: [{
    name: String,
    duration: Number,
    category: "productive" | "neutral" | "unproductive"
  }],
  websites: [{
    url: String,
    domain: String,
    duration: Number,
    category: String
  }],
  productivity: {
    score: Number (0-100),
    status: "excellent" | "good" | "average" | "poor"
  },
  deviceInfo: {
    hostname: String,
    os: String,
    ipAddress: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🐛 Troubleshooting

### Backend won't start
- ✅ Check MongoDB connection string
- ✅ Verify all dependencies installed: `npm install`
- ✅ Check port 5000 is not in use
- ✅ Review `.env` file syntax

### Frontend can't connect to backend
- ✅ Verify backend is running on port 5000
- ✅ Check `NEXT_PUBLIC_API_URL` in `.env.local`
- ✅ Clear browser cache and restart Next.js
- ✅ Check CORS settings in `backend/src/index.js`

### MongoDB connection failed
- ✅ Verify connection string format
- ✅ Check database user credentials
- ✅ Whitelist IP address in MongoDB Atlas
- ✅ Ensure network access is configured

### JWT token invalid
- ✅ Check `JWT_SECRET` matches in `.env`
- ✅ Verify token hasn't expired
- ✅ Include "Bearer " prefix in Authorization header

---

## 📝 Next Steps

1. ✅ **Test the API**: Use `/test-api` page
2. ✅ **Create Admin User**: Register first user with role="admin"
3. ✅ **Develop Python Agent**: Track employee activity
4. ✅ **Build Dashboard**: Create admin/employee dashboards
5. ✅ **Add Reports**: Weekly/monthly productivity reports
6. ✅ **Implement Notifications**: Email alerts for low productivity
7. ✅ **Add Screenshots**: Optional screenshot capture feature

---

## 👥 Support & Contact

**VIHI IT Solutions**
- 📧 Email: support@vihiit.com
- 🌐 Website: https://vihiit.com
- 📞 Phone: +94 XX XXX XXXX

---

## 📄 License

© 2025 VIHI IT Solutions. All rights reserved.
