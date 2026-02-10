# MERN AI Generator

A full-stack MERN web application that generates AI-powered content through a modern React interface and a Node.js backend API.

This project demonstrates authentication, API integration, and real-world full-stack architecture using the MERN stack.

---

## 🚀 Features

* AI content generation via backend API
* User authentication and protected routes
* RESTful API built with Node.js & Express
* MongoDB database integration
* React frontend with clean component structure
* Responsive UI
* Deployment-ready architecture

---

## 🛠 Tech Stack

**Frontend**

* React
* JavaScript
* CSS / Tailwind (if used)

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication

**Other**

* REST API architecture
* Environment variables for secure configuration

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Jack210797/mern_ai_generator.git
cd mern_ai_generator
```

### Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
AI_API_KEY=your_api_key
```

Run backend:

```bash
npm run dev
```

---

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

The project requires the following environment variables:

* `MONGO_URI` — MongoDB connection string
* `JWT_SECRET` — secret for authentication tokens
* `AI_API_KEY` — AI provider API key
* `PORT` — backend server port

---

## ▶ Usage

After starting both frontend and backend:

* Open the frontend in your browser
* Register or log in
* Generate AI content through the interface

---

## 📁 Project Structure

```
mern_ai_generator/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── src/
```

---

## 🎯 Learning Goals

This project was built to practice:

* Full-stack MERN architecture
* Authentication flows
* API integration
* Database design
* Deployment workflows

---

## 📄 License

This project is open-source and available under the MIT License.

 
