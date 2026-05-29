# Zulqarnain Academy of Excellence

## Project Overview

Zulqarnain Academy of Excellence is a full-stack educational platform developed to connect students with tutors, educational consultants, and customer service agents. The platform provides course enrollment, tutor recruitment, authentication, OTP password recovery, and professional career management systems.

The project was developed using modern web technologies including HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

---

# Features

## User Features

* User Registration
* User Login System
* OTP-Based Password Reset
* Course Enrollment
* Mobile Responsive Design

## Tutor Features

* Tutor Application Form
* CV Upload System
* Subject & Experience Management

## Consultant Features

* Consultant Career Applications
* Certificate Upload System
* Professional Experience Submission

## Customer Service Agent Features

* Job Application System
* Education & Experience Submission
* File Upload Functionality

## Admin Features

* MongoDB Database Storage
* Backend API Management
* Form Data Handling
* Error Handling & Validation

---

# Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* MongoDB Compass
* Mongoose

## Additional Packages

* Multer
* bcrypt
* nodemailer
* cors
* dotenv

---

# Installation Steps

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/zulqarnain-academy.git
```

## 2. Open Project Folder

```bash
cd zulqarnain-academy
```

## 3. Install Backend Packages

```bash
npm install
```

## 4. Configure MongoDB

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
```

## 5. Start Backend Server

```bash
node server.js
```

OR

```bash
npx nodemon server.js
```

## 6. Open Frontend

Run frontend using:

* VS Code Live Server
  OR
* Open HTML files directly in browser

---

# API Routes

## Authentication Routes

| Method | Route                 |
| ------ | --------------------- |
| POST   | /api/users/register   |
| POST   | /api/users/login      |
| POST   | /api/users/send-otp   |
| POST   | /api/users/verify-otp |

## Tutor Routes

| Method | Route            |
| ------ | ---------------- |
| POST   | /api/tutor/apply |

## Consultant Routes

| Method | Route                 |
| ------ | --------------------- |
| POST   | /api/consultant/apply |

## Customer Service Agent Routes

| Method | Route            |
| ------ | ---------------- |
| POST   | /api/agent/apply |

## Enrollment Routes

| Method | Route                 |
| ------ | --------------------- |
| POST   | /api/enrollment/apply |

---

# MongoDB Setup

## MongoDB Atlas

* Create MongoDB Atlas account
* Create cluster
* Add database user
* Add IP address
* Copy connection string

## MongoDB Compass

* Install MongoDB Compass
* Paste Atlas connection string
* Connect database

---

# Deployment Instructions

## Frontend Deployment

* GitHub Pages
* Netlify
* Vercel

## Backend Deployment

* Render
* Railway
* Cyclic

## Database Hosting

* MongoDB Atlas Cloud Database

---

# Testing

The project includes:

* Authentication testing
* OTP verification testing
* Form validation testing
* API route testing
* Responsive design testing

---

# Future Improvements

* Online payment integration
* Admin dashboard
* Real-time chat system
* AI chatbot support
* Video conferencing
* Tutor rating system

---

# Author

Developed By: Laraib Sherazi

Project: Zulqarnain Academy of Excellence
