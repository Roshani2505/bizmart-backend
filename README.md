BizMart Backend
📌 Project Overview
BizMart Backend is a RESTful API developed for an e-commerce platform. It manages user authentication, products, cart, and wishlist functionality. This backend is built for quick integration with a React frontend and is optimized for fast deployment.
⚙️ Tech Stack
Node.js
Express.js
Supabase (PostgreSQL)
JWT Authentication
bcrypt.js
dotenv
cors
🔗 API Documentation
🔐 Authentication APIs
POST /api/auth/signup → Register new user
POST /api/auth/login → Login user
🛍️ Product APIs
GET /api/products → Get all products
GET /api/products/:id → Get single product
🛒 Cart APIs
GET /api/cart → Get user cart
POST /api/cart → Add item to cart
DELETE /api/cart/:id → Remove item from cart
❤️ Wishlist APIs
GET /api/wishlist → Get wishlist
POST /api/wishlist → Add to wishlist
DELETE /api/wishlist/:id → Remove from wishlist
🗄️ Database Schema
👤 Users Table (userstable)
id (uuid, primary key)
name
email
password
role (customer / vendor)
phone
created_at
📦 Products Table (products)
id (uuid, primary key)
name
price
category
image
created_at
🛒 Cart Table (cart)
id
user_id
product_id
quantity
❤️ Wishlist Table (wishlist)
id
user_id
product_id
🛠️ Installation Steps
1. Clone Repository
Copy code

git clone https://github.com/your-username/bizmart-backend.git
cd backend
2. Install Dependencies
Copy code

npm install
3. Create .env file
Copy code

PORT=5000

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

JWT_SECRET=your_secret_key
4. Run Server
Copy code

node server.js
Server will run on:
Copy code

http://localhost:5000
🌐 Deployment Link
(Add your deployed backend link here — Render / Railway)
⚡ Features
User Authentication (Login / Signup)
Product Listing & Details
Add to Cart functionality
Wishlist support
Supabase Database integration
JWT based authentication