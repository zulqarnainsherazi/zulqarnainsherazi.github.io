# DEPLOYMENT GUIDE

## Frontend Deployment

Recommended Platforms:

* GitHub Pages
* Netlify
* Vercel

### Steps

1. Push code to GitHub
2. Connect repository to Netlify or Vercel
3. Deploy frontend

---

# Backend Deployment

Recommended Platforms:

* Render
* Railway

### Steps

1. Create Render account
2. Connect GitHub repository
3. Select Backend Folder
4. Configure Environment Variables
5. Deploy Server

---

# MongoDB Deployment

MongoDB Atlas Cloud Database

### Steps

1. Create Atlas Cluster
2. Create Database User
3. Add IP Access
4. Copy Connection String
5. Add MONGO_URI to Environment Variables

---

# Environment Variables

Create .env file

MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_gmail

EMAIL_PASS=your_app_password

JWT_SECRET=your_secret_key

PORT=5000

---

# Production Checklist

✓ MongoDB Atlas Connected

✓ Environment Variables Added

✓ HTTPS Enabled

✓ API Routes Tested

✓ Forms Tested

✓ Responsive Design Tested

✓ File Upload Tested

✓ OTP Tested

✓ GitHub Repository Updated

✓ Documentation Completed

---

# Final Deployment Architecture

Frontend

HTML + CSS + JavaScript

↓

Backend

Node.js + Express.js

↓

Database

MongoDB Atlas

↓

File Storage

Uploads Folder

↓

Authentication

bcrypt + OTP + Nodemailer
