


# 🚀 ProductStore Project

## 📋 Summary

This application is a store management platform that allows users to create, edit, and view products. Through a responsive interface, users can intuitively manage the product catalog. The frontend communicates with the backend via a RESTful API, ensuring a dynamic and efficient data flow.

---

## ⚙️ Setup

1. Create a `.env` file in the project root with the following variables:

```env
MONGO_URI=your_mongo_uri
PORT=5000
```

2. Build the application locally:

```bash
npm run build
```

3. Start the application:

```bash
npm run start
```

---

## 🛠️ Tech Stack

### Frontend 🖥️

* Language: **HTML**, **JavaScript**
* Frameworks/Libraries: **React**, **Chakra UI**
* Responsive UI with React.js and Chakra UI

### Backend ⚙️

* Language: **JavaScript**
* Frameworks: **Node**
* Database: **MongoDB**

### Tools 🧰
* Postman: used for testing and validating backend API endpoints during development.

---

## ⚠️ Challenges Faced

* For production deployment, it was essential to use **Express version 4** due to changes in later versions affecting server behavior.
* Proxy configuration during development required careful setup to ensure frontend requests were correctly forwarded to the backend, avoiding CORS issues and ensuring smooth communication.
* Managing state on the frontend, especially with forms for creating and editing products, demanded attention to maintain UI responsiveness and data consistency.
* Optimizing the build process to reduce static file size and improve application load times.



