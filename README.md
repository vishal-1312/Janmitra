🚀 **JanMitr – Backend (Node.js + Express + MongoDB)**

JanMitr is a civic issue reporting and resolution platform where citizens can report local problems (garbage, potholes, water issues, etc.) with geo-location, and authorities can track, manage, and resolve them with SLA-based accountability.

This repository contains the backend service responsible for authentication, issue management, geo-spatial APIs, role-based access control, and real-time features.



🧠 **Key Features**

🔐 Authentication & Authorization

JWT-based authentication

Role-based access control (Citizen, Worker, Admin)


📝 Issue Management

Create, update, and view civic issues

Attach category and geo-location to each issue


🗺️ Map & Geo-Spatial APIs

Fetch nearby issues using MongoDB geo queries

Supports radius-based search for map view


⏱️ SLA Tracking & Escalation

SLA creation for each issue

Automated background jobs to check SLA breaches

Escalation levels for overdue issues


💬 Community Engagement

Comments on issues

Voting system to prioritize issues


🎁 Rewards & Gamification

Points-based reward system for citizen participation


🔔 Real-Time Updates (Socket.IO)

Real-time notifications for new issues, status updates, and comments



🛠️ **Tech Stack**

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Mongoose ODM)

Auth: JWT (JSON Web Tokens)

Real-Time: Socket.IO

Background Jobs: node-cron

File Uploads: Multer + Cloud Storage

Logging: Morgan



⚙️ **Setup & Installation**


1️⃣ Clone the Repository
git clone https://github.com/SatyamRao15/Janmitr-SIH_25031/tree/main/Backend
cd Backend


2️⃣ Install Dependencies
npm install


3️⃣ Configure Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


4️⃣ Run the Server
npm run dev

Server will start at:

http://localhost:5000



🔗 API Endpoints (Sample)
Auth

POST /api/auth/register – Register user

POST /api/auth/login – Login user

Issues

POST /api/issues – Create issue (Auth required)

GET /api/issues – Get all issues

Categories

POST /api/categories – Create category (Admin only)

GET /api/categories – Get all categories

Map

GET /api/map/nearby?lat=...&lng=...&distance=... – Get nearby issues



🧪 **Testing**

You can test APIs using:

Postman

Thunder Client (VS Code)

Ensure to pass JWT token in Authorization header for protected routes.


**“Scalable backend for a civic issue reporting platform with geo-spatial APIs, SLA tracking, and real-time updates using Node.js, Express, and MongoDB.”**



👨‍💻 **Contributors**

**Satyam Rao** – Backend Developer


📜 **License**

This project is licensed under the MIT License.
