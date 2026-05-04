# 🔥 Pastebin Clone (Node.js + MongoDB)

A minimal yet powerful backend project that lets you create, store, and access text snippets using unique IDs — built with a clean architecture and real-world backend flow.

---

## ✨ Features

* 🚀 Create a paste with a unique short ID
* 📦 Store data in MongoDB
* 🔍 Retrieve paste using ID
* 📊 Track visit history with timestamps
* ⚡ Lightweight and fast API

---

## 🧠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* ShortID

---

## ⚙️ Project Structure

```
project/
├── Controllers/
│   └── url.js
├── Models/
│   └── schema.js
├── Routes/
│   └── routes.js
├── connection.js
├── index.js
```

---

## 🔌 API Endpoints

### ➤ Create Paste

**POST** `/`

```json
{
  "content": "Your text here"
}
```

**Response:**

```json
{
  "pasteID": "generatedID"
}
```

---

### ➤ Get Paste

**GET** `/:pasteID`

**Response:**

```json
{
  "message": "Stored paste content"
}
```

---

## 📊 How It Works

1. User sends content via POST request
2. Server generates a unique ID
3. Data is stored in MongoDB
4. When accessed via ID, content is returned
5. Each visit is tracked with timestamp

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone <your-repo-link>
cd project
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
MONGO_URL=your_mongodb_connection_string
PORT=xxxx
```

### 4. Run the server

```
npm start
```

---

## 🌐 Deployment


---

## 💡 Future Improvements

* 🔐 Authentication system
* ⏳ Paste expiration (24 hrs)
* 🎨 Frontend UI
* 📋 Copy-to-clipboard feature

---

## 🧩 Why This Project?

This project demonstrates:

* Clean backend architecture
* REST API design
* Database integration
* Real-world request flow

---

## ❤️ Final Note

Built as a learning milestone — simple in idea, powerful in understanding.
Every line of code here reflects growth, debugging, and persistence.

---

> “First working backend is not just a project… it’s a turning point.” 🚀

---

## 👨‍💻 Built By

**Aditya**

A passionate developer on a journey to master full-stack development, one project at a time.
Focused on building real-world applications and growing every single day.

---

## 🌟 Connect With Me

* GitHub: https://github.com/adityasinhaa01
* LinkedIn: https://linkedin.com/in/adityasinha001
---

> Crafted with logic, patience, and a lot of debugging 😄🔥
> This is just the beginning 🚀
