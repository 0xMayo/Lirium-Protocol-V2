# <img src="Lirium-frontend\src\assets\Lirium-Protocol-Logo.png" alt="Lirium Protocol Logo" width="250px"> 

### **Lirium Protocol: Decentralized Finance for Everyone**

## 📢 Important Note

**This is a school project and not a real-world blockchain implementation.** Lirium Protocol is designed as an educational exercise to demonstrate blockchain concepts and DeFi principles.

## 👋 Overview

Lirium Protocol is a groundbreaking platform designed to revolutionize the future of Decentralized Finance (DeFi). We envision a world where individuals have complete control over their digital assets and financial transactions, empowered by a secure, transparent, and efficient blockchain ecosystem. Lirium Protocol fosters innovation in the digital economy, putting the power back in your hands.

## 💻 Tech Stack

Lirium Protocol is built using a robust combination of technologies:

- Frontend: React, Vite, JavaScript, HTML5, SASS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Real-time Communication: PubNub

## 🌟 Features

- **Seamless Transactions:** Simulate sending and receiving digital assets on the Lirium Protocol blockchain.
- **Block Explorer:** Gain insights into the Lirium Protocol network, including transaction history and block confirmations.
- **User Authentication:** Secure login and registration system for users.
- **Transaction Pool:** View pending transactions before they are mined into a block.
- **Block Mining:** Simulate the process of mining new blocks and adding them to the blockchain.

##  ⚠️ Requirements

To interact with Lirium Protocol, you'll need:

- Node.js (v20.10.0 or newer)
- npm (Node Package Manager)
- Git
- MongoDB (local installation or cloud service)
- PubNub account

## 💻 API Endpoints

1. **Get Blockchain Info:**
   - Method: GET
   - URL: `http://localhost:5002/api/v1/lirium`
   - Description: Retrieves information about the current state of the Lirium Protocol network.

2. **Add New Transaction:**
   - Method: POST
   - URL: `http://localhost:5002/api/v1/transaction`
   - Body: JSON format, specify transaction details
   - Description: Adds a new transaction to the Lirium Protocol transaction pool.

3. **Get Transaction Pool:**
   - Method: GET
   - URL: `http://localhost:5002/api/v1/transaction/transactions`
   - Description: Retrieves a list of pending transactions in the Lirium Protocol transaction pool.

4. **Mine Block:**
   - Method: GET
   - URL: `http://localhost:5002/api/v1/transaction/mine`
   - Description: Initiates the mining process to create a new block containing pending transactions.

5. **User Registration:**
   - Method: POST
   - URL: `http://localhost:5002/api/v1/auth/register`
   - Body: JSON format with user details (name, email, password)
   - Description: Registers a new user in the system.

6. **User Login:**
   - Method: POST
   - URL: `http://localhost:5002/api/v1/auth/login`
   - Body: JSON format with login credentials (email, password)
   - Description: Authenticates a user and returns a JWT token.


##  Getting Started

Getting started with Lirium Protocol is easy! Here's how:

1. **Clone the Repository:**

```bash
   git clone https://github.com/0xMayo/Lirium-Protocol-V2.git
   cd lirium-protocol
```

2. **Install Dependencies:**

```bash
npm install
```

3. Add a **config.env** file, and add the following: 

```bash
dotenv
# Environment configuration
PUBLISH_KEY=your_publish_key_here
SUBSCRIBE_KEY=your_subscribe_key_here
SECRET_KEY=your_secret_key_here
USER_ID=your_user_id_here

NODE_ENV=development
PORT=5002

JWT_SECRET=your_jwt_secret
JWT_TTL=90d
JWT_COOKIE_TTL=90

MONGO_URI=your_mongo_connection_string
```
4. **PubNub Configuration:**

To use PubNub for real-time communication, you need to set up PubNub keys. Visit the PubNub Dashboard to get your PUBLISH_KEY, SUBSCRIBE_KEY, and SECRET_KEY. Add these keys to your config.env file as shown above.

## 🤝 Contribute to Lirium Protocol

Lirium Protocol is an open-source project, and we welcome contributions from the community! Whether you're a developer, writer, designer, or simply a passionate believer in DeFi, there are many ways to get involved:

* **Github Repository:** Fork our open-source repository on Github, suggest improvements, and submit pull requests.

## 📚 Educational Purpose

Remember, Lirium Protocol is designed for educational purposes to demonstrate blockchain and DeFi concepts. It is not intended for real-world financial transactions or as a fully functional blockchain network.

### Together, we can build a future of decentralized finance that empowers everyone. 

### Join the Lirium Protocol revolution today! 