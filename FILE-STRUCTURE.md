# 📁 Complete Project File Structure

```
company-web/
│
├── 📂 backend/                           # Express.js Backend API
│   │
│   ├── 📂 src/
│   │   │
│   │   ├── 📂 controllers/              # Business Logic Layer
│   │   │   ├── userController.js        # User CRUD operations
│   │   │   └── activityController.js    # Activity tracking operations
│   │   │
│   │   ├── 📂 models/                   # Database Schemas
│   │   │   ├── User.js                  # Employee/Admin schema
│   │   │   └── Activity.js              # Time tracking schema
│   │   │
│   │   ├── 📂 routes/                   # API Endpoints
│   │   │   ├── userRoutes.js            # /api/users/*
│   │   │   └── activityRoutes.js        # /api/activity/*
│   │   │
│   │   ├── 📂 middleware/               # Custom Middleware
│   │   │   ├── authMiddleware.js        # JWT verification & RBAC
│   │   │   ├── errorHandler.js          # Global error handler
│   │   │   ├── asyncHandler.js          # Async error wrapper
│   │   │   └── notFound.js              # 404 handler
│   │   │
│   │   ├── 📂 utils/                    # Helper Functions
│   │   │   └── jwtUtils.js              # Token generation/verification
│   │   │
│   │   ├── 📂 config/                   # Configuration
│   │   │   └── db.js                    # MongoDB connection
│   │   │
│   │   └── index.js                     # 🚀 Server Entry Point
│   │
│   ├── .env                             # Environment variables (gitignored)
│   ├── .env.example                     # Environment template
│   ├── .gitignore                       # Git ignore rules
│   ├── package.json                     # Backend dependencies
│   └── README.md                        # Backend documentation
│
├── 📂 src/                              # Next.js Frontend
│   │
│   ├── 📂 app/                          # App Router Pages
│   │   ├── layout.js                    # Root layout
│   │   ├── page.js                      # Home page
│   │   ├── globals.css                  # Global styles
│   │   │
│   │   ├── 📂 test-api/                 # ✨ NEW: API Testing Page
│   │   │   └── page.jsx                 # Interactive API test dashboard
│   │   │
│   │   ├── 📂 aboutus/
│   │   ├── 📂 careers/
│   │   ├── 📂 contactus/
│   │   ├── 📂 industries/
│   │   ├── 📂 marketing/
│   │   ├── 📂 portfolio/
│   │   ├── 📂 privacy-policy/
│   │   ├── 📂 team/
│   │   ├── 📂 technology/
│   │   └── 📂 terms-conditions/
│   │
│   ├── 📂 components/
│   │   ├── 📂 common/                   # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ScrollToTopButton.jsx
│   │   │   └── CustomCursor.jsx
│   │   │
│   │   ├── 📂 providers/                # Context providers
│   │   │   └── MuiThemeProvider.jsx
│   │   │
│   │   ├── 📂 ui/                       # UI components
│   │   └── 📂 other/                    # Feature-specific components
│   │
│   ├── 📂 lib/                          # Utilities & Helpers
│   │   └── api.js                       # ✨ NEW: Axios API client
│   │
│   └── 📂 theme/                        # MUI Theme configuration
│       ├── theme.js
│       ├── EmotionRegistry.js
│       ├── ThemeRegistry.js
│       └── createEmotionCache.js
│
├── 📂 public/                           # Static Assets
│   ├── fonts/
│   ├── images/
│   │   ├── logo-new.png
│   │   ├── home-img/
│   │   ├── career-img/
│   │   ├── technology-img/
│   │   └── marketing-img/
│   └── videos/
│
├── .env.local                           # ✨ NEW: Frontend env vars
├── .gitignore                           # Git ignore rules
├── eslint.config.mjs                    # ESLint configuration
├── jsconfig.json                        # JS path aliases
├── next.config.mjs                      # Next.js configuration
├── package.json                         # ✨ UPDATED: Added axios
├── README.md                            # Project README
│
├── 📄 SETUP-GUIDE.md                    # ✨ NEW: Complete setup guide
├── 📄 PROJECT-SUMMARY.md                # ✨ NEW: Implementation summary
└── 📄 FILE-STRUCTURE.md                 # ✨ NEW: This file

```

---

## 🎯 File Count Summary

### Backend (17 files)
```
src/
├── controllers/      (2 files)
├── models/          (2 files)
├── routes/          (2 files)
├── middleware/      (4 files)
├── utils/           (1 file)
├── config/          (1 file)
├── index.js         (1 file)

root/
├── .env.example     (1 file)
├── .gitignore       (1 file)
├── package.json     (1 file)
└── README.md        (1 file)
```

### Frontend Integration (4 new/modified files)
```
src/
├── lib/api.js                    (NEW - API client)
└── app/test-api/page.jsx         (NEW - Test dashboard)

root/
├── .env.local                    (NEW - Environment)
└── package.json                  (MODIFIED - Added axios)
```

### Documentation (3 new files)
```
root/
├── SETUP-GUIDE.md               (NEW - Setup instructions)
├── PROJECT-SUMMARY.md           (NEW - Implementation details)
└── FILE-STRUCTURE.md            (NEW - This structure)
```

---

## 📊 Code Statistics

| Category | Files | Lines of Code (approx) |
|----------|-------|------------------------|
| Backend Controllers | 2 | 500+ |
| Backend Models | 2 | 350+ |
| Backend Routes | 2 | 50+ |
| Backend Middleware | 4 | 200+ |
| Backend Utils/Config | 2 | 100+ |
| Backend Entry Point | 1 | 100+ |
| Frontend API Client | 1 | 250+ |
| Frontend Test Page | 1 | 300+ |
| **Total Backend** | **13** | **~1,300** |
| **Total New Frontend** | **2** | **~550** |
| **Total Documentation** | **4** | **~1,500** |
| **GRAND TOTAL** | **19** | **~3,350** |

---

## 🔑 Key Files Explained

### Backend Core Files

#### `backend/src/index.js`
- Express server setup
- MongoDB connection
- Middleware configuration (CORS, Helmet, Morgan)
- Route mounting
- Global error handling
- **Purpose**: Application entry point

#### `backend/src/models/User.js`
- User schema definition
- Password hashing with bcrypt
- Email and employeeId uniqueness
- Role-based fields (admin/employee/manager)
- Public profile method
- **Purpose**: Employee data structure

#### `backend/src/models/Activity.js`
- Activity tracking schema
- Applications and websites arrays
- Productivity score calculation
- Device information
- Auto-calculate total time
- **Purpose**: Time tracking data structure

#### `backend/src/controllers/userController.js`
Functions:
1. `registerUser` - Create new employee
2. `loginUser` - Authenticate and return JWT
3. `getAllUsers` - Admin view all users
4. `getUserById` - Get single user details
5. `updateUser` - Update user information
6. `deleteUser` - Remove user
7. `getProfile` - Get current user info

#### `backend/src/controllers/activityController.js`
Functions:
1. `createActivity` - Log work activity
2. `getUserActivities` - Get user's activity history
3. `getAllActivities` - Admin view all activities
4. `getActivityStats` - Calculate statistics
5. `deleteActivity` - Remove activity record

#### `backend/src/middleware/authMiddleware.js`
- JWT token verification
- Role-based authorization
- Protected route implementation
- **Purpose**: Secure API endpoints

---

### Frontend Integration Files

#### `src/lib/api.js`
- Axios instance with base URL
- Request interceptor (auto-add JWT token)
- Response interceptor (error handling)
- Complete API methods:
  - `userAPI`: register, login, logout, getProfile, getAllUsers, updateUser, deleteUser
  - `activityAPI`: create, getAll, getUserActivities, getStats, delete
  - `checkHealth`: Backend health check
- **Purpose**: Centralized API communication

#### `src/app/test-api/page.jsx`
- Interactive test dashboard
- Health check button
- User registration test
- Login test
- Profile retrieval test
- Activity creation test
- JSON response viewer
- **Purpose**: Verify backend integration

---

## 🔗 File Dependencies

```
index.js
├── requires: controllers/userController
├── requires: controllers/activityController
├── requires: middleware/authMiddleware
├── requires: middleware/errorHandler
├── requires: middleware/notFound
└── requires: config/db

userController.js
├── requires: models/User
├── requires: utils/jwtUtils
└── requires: middleware/asyncHandler

activityController.js
├── requires: models/Activity
├── requires: models/User
└── requires: middleware/asyncHandler

authMiddleware.js
├── requires: models/User
├── requires: jsonwebtoken
└── requires: middleware/asyncHandler

User.js (model)
├── requires: mongoose
└── requires: bcryptjs

Activity.js (model)
└── requires: mongoose

api.js (frontend)
└── requires: axios

test-api/page.jsx
├── requires: lib/api
└── requires: @mui/material
```

---

## 🎨 File Naming Conventions

### Backend
- **Controllers**: `[resource]Controller.js` (e.g., userController.js)
- **Models**: `[Resource].js` (capitalized, e.g., User.js)
- **Routes**: `[resource]Routes.js` (e.g., userRoutes.js)
- **Middleware**: `[purpose]Middleware.js` or `[purpose].js`
- **Utils**: `[purpose]Utils.js` (e.g., jwtUtils.js)

### Frontend
- **Pages**: `page.jsx` or `page.js`
- **Components**: `[ComponentName].jsx` (PascalCase)
- **Utilities**: `[purpose].js` (camelCase)
- **Styles**: `globals.css` or `[component].module.css`

---

## 🚀 Files to Run

### Development
```bash
# Terminal 1: Backend
cd backend
npm run dev              # Runs: nodemon src/index.js

# Terminal 2: Frontend
npm run dev              # Runs: next dev --turbopack
```

### Production
```bash
# Backend
cd backend
npm start                # Runs: node src/index.js

# Frontend
npm run build            # Runs: next build --turbopack
npm start                # Runs: next start
```

---

## 📝 Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| `backend/.env` | Backend environment variables | Gitignored |
| `backend/.env.example` | Environment template | Committed |
| `.env.local` | Frontend environment variables | Gitignored |
| `backend/package.json` | Backend dependencies | Committed |
| `package.json` | Frontend dependencies | Committed |
| `next.config.mjs` | Next.js configuration | Committed |
| `eslint.config.mjs` | Linting rules | Committed |
| `jsconfig.json` | Path aliases (@/*) | Committed |

---

## 🔐 Security Files

| File | Security Feature |
|------|------------------|
| `.gitignore` | Prevents sensitive files from being committed |
| `backend/.env` | Stores secrets (MongoDB URI, JWT secret) |
| `authMiddleware.js` | Verifies JWT tokens |
| `User.js` | Hashes passwords before saving |
| `jwtUtils.js` | Generates secure tokens |

---

## 📚 Documentation Hierarchy

```
📖 Documentation
│
├── 📄 README.md                 # Project overview (existing)
├── 📄 backend/README.md         # Backend API documentation
├── 📄 SETUP-GUIDE.md           # Step-by-step setup
├── 📄 PROJECT-SUMMARY.md       # Implementation details
└── 📄 FILE-STRUCTURE.md        # This file
```

---

## ✅ Files Created in This Session

### Backend (16 files)
1. ✅ `backend/src/index.js`
2. ✅ `backend/src/models/User.js`
3. ✅ `backend/src/models/Activity.js`
4. ✅ `backend/src/controllers/userController.js`
5. ✅ `backend/src/controllers/activityController.js`
6. ✅ `backend/src/routes/userRoutes.js`
7. ✅ `backend/src/routes/activityRoutes.js`
8. ✅ `backend/src/middleware/authMiddleware.js`
9. ✅ `backend/src/middleware/errorHandler.js`
10. ✅ `backend/src/middleware/asyncHandler.js`
11. ✅ `backend/src/middleware/notFound.js`
12. ✅ `backend/src/utils/jwtUtils.js`
13. ✅ `backend/src/config/db.js`
14. ✅ `backend/.env.example`
15. ✅ `backend/.gitignore`
16. ✅ `backend/package.json`
17. ✅ `backend/README.md`

### Frontend (3 files)
18. ✅ `src/lib/api.js`
19. ✅ `src/app/test-api/page.jsx`
20. ✅ `.env.local`

### Modified (1 file)
21. ✅ `package.json` (added axios)

### Documentation (3 files)
22. ✅ `SETUP-GUIDE.md`
23. ✅ `PROJECT-SUMMARY.md`
24. ✅ `FILE-STRUCTURE.md`

**Total: 24 files created/modified**

---

## 🎯 Quick Access

### Most Important Files

#### To Run the Application:
- `backend/src/index.js` - Start backend
- `backend/.env` - Configure backend
- `.env.local` - Configure frontend

#### To Test:
- `src/app/test-api/page.jsx` - Interactive test page

#### To Understand:
- `SETUP-GUIDE.md` - How to set up and run
- `PROJECT-SUMMARY.md` - What was implemented
- `backend/README.md` - Backend API docs

#### To Modify:
- `backend/src/controllers/` - Change business logic
- `backend/src/models/` - Modify data structure
- `src/lib/api.js` - Update API calls

---

© 2025 VIHI IT Solutions. All rights reserved.
