# Realtime Chat Application

A realtime chat application with automatic deletion of chats and all related data after **10 minutes**. This pet project was created to practice modern frontend and lightweight backend technologies, as well as to understand realtime data flow and state management.

---

## About the Project

This project is based on a video tutorial and was adapted for learning purposes.

The goal was not just to follow the guide step by step, but to understand the architecture, data flow, and design decisions behind a realtime application. During development, I analyzed the tutorial code and modified parts of the implementation to strengthen my understanding and improve code quality.

---

## Technologies and Tools

### Frontend

* React.js
* Next.js
* TypeScript
* React Hooks
* Tailwind CSS
* TanStack Query
* Zod
* nanoid

### Backend

* Elysia

### Database

* Upstash

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/real-time-chat.git
```

Navigate to the project directory:

```bash
cd real-time-chat
```

Install dependencies:

```bash
npm install
```

Create an environment file and add the required variables (Upstash, etc.):

```bash
cp .env.example .env
```

Run the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Features

* Realtime messaging between users
* Automatic deletion of chats and all related messages af
