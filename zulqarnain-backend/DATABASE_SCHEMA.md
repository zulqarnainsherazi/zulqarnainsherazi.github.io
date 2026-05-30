# DATABASE SCHEMA

## Database

MongoDB Atlas

Database Name:

zulqarnainacademy

---

# Users Collection

Fields:

* _id
* name
* email
* password
* phone
* accountType
* otp
* otpExpire
* createdAt
* updatedAt

---

# Tutors Collection

Fields:

* _id
* name
* email
* phone
* qualification
* subject
* experience
* mode
* city
* intro
* cv
* createdAt
* updatedAt

---

# Consultants Collection

Fields:

* _id
* name
* email
* phone
* experience
* certificates
* cv
* description
* createdAt
* updatedAt

---

# Agents Collection

Fields:

* _id
* name
* email
* phone
* city
* education
* certificate
* experience
* createdAt
* updatedAt

---

# Enrollments Collection

Fields:

* _id
* name
* email
* phone
* course
* message
* createdAt
* updatedAt

---

# Relationships

User → Enrollment

User → Tutor Application

User → Consultant Application

User → Customer Service Agent Application

All records are stored using MongoDB collections and managed through Mongoose schemas.
