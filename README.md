# 🚀 NestJS Role-Based Course Management API

A **clean, scalable backend API** built with **NestJS** demonstrating **authentication, authorization, role-based dashboards**, and **Course CRUD operations**.  
This project is designed as a **learning-focused but production-ready** NestJS application.

---

## 📌 Project Overview

This backend system allows users to:

- Sign up and sign in securely
- Access dashboards based on user roles
- Manage courses with full CRUD functionality
- Use protected routes with authentication & authorization

Built to understand **real-world backend architecture using NestJS**.

---

## 🧠 Core Features

### 🔐 Authentication & Authorization

- User **Sign Up / Sign In**
- JWT-based authentication
- Secure password hashing
- Protected routes using Guards
- Role-based access control (RBAC)

### 👤 Role-Based Dashboard

- **Admin Dashboard**
  - Manage users
  - Full access to course management
- **User Dashboard**
  - View accessible courses

### 📚 Course Management (CRUD)

- Create course
- Get all courses
- Get single course
- Update course
- Delete course
- Role-based permissions applied

---

## 🛠️ Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** MongoDB (Mongoose) _(or Prisma – adjust if needed)_
- **Authentication:** JWT
- **Authorization:** Guards & Roles
- **Validation:** DTO
- **Password Security:** bcrypt

---

## 📂 Project Structure

```

src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.module.ts
│
├── courses/
│   ├── courses.controller.ts
│   ├── courses.service.ts
│   ├── courses.module.ts
│
├── common/
│   ├── guards/
│   ├── decorators/
│   ├── enums/
│
├── app.module.ts
└── main.ts

```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nayeem-miah/nestJs-learning-management-system-backend.git
cd nestJs-learning-management-system-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/nest-course
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

### 4️⃣ Run the Project

```bash
npm run start:dev
```

Server will run on:

```
http://localhost:3000
```

---

## 🔑 API Endpoints (Sample)

### Auth

- `POST /auth/signup`
- `POST /auth/signin`

### Courses

- `POST /courses` (Admin)
- `GET /courses`
- `GET /courses/:id`
- `PATCH /courses/:id` (Admin)
- `DELETE /courses/:id` (Admin)

---

## 🧪 Learning Outcomes

- NestJS modular architecture
- JWT authentication flow
- Role-based authorization
- Guards, decorators & pipes
- Clean and scalable backend structure
- Real-world API design patterns

---

## 📌 Future Improvements

- Refresh token system
- Pagination & filtering
- Swagger API documentation
- Admin analytics dashboard
- Unit & e2e testing
