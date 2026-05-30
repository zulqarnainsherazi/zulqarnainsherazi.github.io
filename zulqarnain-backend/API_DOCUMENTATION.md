# API DOCUMENTATION

## Base URL

http://localhost:5000

---

# Authentication APIs

## Register User

POST

/api/users/register

### Request Body

{
"name":"John",
"email":"[john@gmail.com](mailto:john@gmail.com)",
"password":"123456",
"phone":"03000000000"
}

---

## Login User

POST

/api/users/login

### Request Body

{
"email":"[john@gmail.com](mailto:john@gmail.com)",
"password":"123456"
}

---

## Send OTP

POST

/api/users/send-otp

### Request Body

{
"email":"[john@gmail.com](mailto:john@gmail.com)"
}

---

## Verify OTP

POST

/api/users/verify-otp

### Request Body

{
"email":"[john@gmail.com](mailto:john@gmail.com)",
"otp":"123456",
"password":"newpassword"
}

---

# Tutor APIs

POST

/api/tutor/apply

### FormData

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

---

# Consultant APIs

POST

/api/consultant/apply

### FormData

* name
* email
* phone
* experience
* certificates
* cv
* description

---

# Customer Service Agent APIs

POST

/api/agent/apply

### FormData

* name
* email
* phone
* city
* education
* certificate
* experience

---

# Enrollment APIs

POST

/api/enrollment/apply

### Request Body

{
"name":"",
"email":"",
"phone":"",
"course":"",
"message":""
}

---

# Response Format

Success:

{
"message":"Success"
}

Error:

{
"message":"Error"
}
