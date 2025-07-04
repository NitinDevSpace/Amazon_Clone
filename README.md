# 🛒 Amazon Clone

[🚀 Live Demo](https://e-commerce-website-233cc.web.app/)   |   Built with ❤️ using React, Firebase, and Stripe

An Amazon Clone web application that mimics the core functionality of Amazon, including user authentication, browsing products, adding to cart, and making payments.

---

## 📌 Features

* 🔐 **User Authentication** (Sign in / Sign up / Sign out using Firebase Auth)
* 🛍️ **Add to Cart** functionality with real-time item updates
* 💳 **Secure Payment Integration** via Stripe
* 🧾 **Order Summary** and checkout process
* 📦 **Order History** viewable after purchase
* 🔎 **Product Listing** UI similar to Amazon
* 📱 **Responsive Design** (mobile, tablet, desktop)

---

## 🚀 Live Demo

👉 Click here to check out the live project: [https://your-live-demo-link.com](https://e-commerce-website-233cc.web.app/)

> Replace with your actual deployed URL (e.g., Vercel, Netlify, Firebase Hosting)

---

## 🛠️ Tech Stack

| Technology     | Usage                    |
| -------------- | ------------------------ |
| React.js       | Frontend UI              |
| Firebase       | Authentication + Hosting |
| Stripe         | Payment Gateway          |
| React Router   | Client-side routing      |
| Context API    | Global state management  |
| CSS / Tailwind | Styling                  |

---

## 📂 Folder Structure

```
amazon-clone/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Product.js
│   │   ├── Checkout.js
│   │   ├── Login.js
│   │   └── Payment.js
│   │
│   ├── context/
│   │   └── StateProvider.js
│   │
│   ├── reducer.js
│   ├── App.js
│   ├── index.js
│   └── firebase.js
│
├── .env
├── package.json
└── README.md
```

---

## 🧰 Setup Instructions

### Prerequisites

* Node.js & npm
* Firebase project with Authentication enabled
* Stripe developer account

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

* Go to [Firebase Console](https://console.firebase.google.com)
* Create a new project and enable **Email/Password Authentication**
* Get your Firebase config and add it to `firebase.js`

```js
// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  ...
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
```

### 4. Set up Stripe

* Get your Stripe public key and add it to your `.env` file

```
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxx
```

* Use Stripe CLI or backend function for payment processing

> For development, you can mock payments with test card:
> `4242 4242 4242 4242` (Any future expiry & CVC)

### 5. Start the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## 🧪 Test Accounts

* Email: `testuser@example.com`
* Password: `password123`

> You can add more users via Firebase Auth panel

---

## ⚙️ Features in Detail

### 🔐 Authentication

* Firebase Email/Password login
* Persistent sessions
* Auth state synced globally via Context API

### 🛒 Cart System

* Products can be added/removed
* Quantity and total price updated in real-time
* Uses Context API to manage cart state

### 💳 Payments

* Stripe integrated via `@stripe/react-stripe-js`
* Test mode supported
* Confirmation screen after checkout

### 📦 Orders Page (Optional)

* View past purchases
* Stored in Firebase Firestore (if enabled)

---

## 🧼 Future Improvements

* 🔍 Search and filtering
* 🖼️ Product categories with images
* 📦 Backend order storage in Firestore
* 👤 User profile management

---

## 🤝 Contributing

Feel free to fork this repo, submit issues or pull requests.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Let me know if you'd like a Firebase backend + Firestore integration guide or deployment help!
