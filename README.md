# SkillSwap

A peer-to-peer skill sharing platform where users can offer skills they are good at (like graphic design, cooking, coding) and learn skills from others in return — creating a barter-like system for learning.

## 🚀 Features
- **Authentication**: Register/Login with JWT, Google OAuth (bonus)
- **Profile Management**: Name, Bio, Avatar, City, Skills to teach/learn
- **Skill Listings**: Post, search, filter, update, and delete skills
- **Session Booking**: Request, accept/reject, and manage learning sessions
- **Chat System**: Real-time chat after booking is accepted
- **Reviews & Ratings**: Leave reviews after sessions
- **Dashboard**: View upcoming, past sessions, and stats

## 🛠 Tech Stack
- **MongoDB**: Database for users, skills, sessions, etc.
- **Express.js**: Backend API
- **React.js**: Frontend UI (in `/frontend`)
- **Node.js**: Server-side logic
- **Socket.io**: Real-time chat (planned)

## 📁 Project Structure
```
SkillSwap/
├── server/
│   ├── models/         # Mongoose models
│   ├── controller/     # Route controllers
│   ├── routes/         # Express routes
│   ├── middlewares/    # Auth and other middleware
│   ├── config/         # DB config, etc.
│   └── server.js       # Entry point
├── frontend/           # React app (UI)
└── README.md
```

## ⚡️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Backend Setup
1. `cd server`
2. `npm install`
3. Create a `.env` file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=8080
   ```
4. `npm start`

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm start`

## 🌐 API Endpoints (Main)
- `POST   /api/users/register` — Register
- `POST   /api/users/login` — Login
- `GET    /api/users/profile` — Get profile (auth)
- `PUT    /api/users/profile` — Update profile (auth)
- `GET    /api/users/:id` — Get user by ID (auth)

- `POST   /api/skills/` — Create skill (auth)
- `GET    /api/skills/` — List/search skills
- `GET    /api/skills/:id` — Get skill by ID
- `PUT    /api/skills/:id` — Update skill (auth, owner)
- `DELETE /api/skills/:id` — Delete skill (auth, owner)

- `POST   /api/sessions/` — Book session (auth)
- `GET    /api/sessions/` — My sessions (auth)
- `GET    /api/sessions/:id` — Get session (auth)
- `PUT    /api/sessions/:id/status` — Update status (auth, teacher)
- `POST   /api/sessions/:id/review` — Leave review (auth)

- `GET    /api/chats/:sessionId` — Get chat (auth)
- `POST   /api/chats/:sessionId/message` — Send message (auth)
- `GET    /api/chats/:sessionId/messages` — Get messages (auth)

- `GET    /api/reviews/user/:userId` — Get reviews for user
- `GET    /api/reviews/:id` — Get review by ID
- `DELETE /api/reviews/:id` — Delete review (auth, reviewer)

## 🧑‍💻 Contributing
Pull requests welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
MIT 