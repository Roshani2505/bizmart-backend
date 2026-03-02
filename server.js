import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

// 🔥 AUTH ROUTES
app.post("/api/auth/signup", (req, res) => {
  res.json({
    user: req.body,
    token: "dummy-token"
  });
});

app.post("/api/auth/login", (req, res) => {
  res.json({
    user: { email: req.body.email },
    token: "dummy-token"
  });
});

// 🔥 PRODUCTS (IMPORTANT FIX)
app.get("/api/products", (req, res) => {
  res.json([]); // empty but no error
});

// 🔥 CART (IMPORTANT FIX)
app.get("/api/cart", (req, res) => {
  res.json([]);
});

app.post("/api/cart", (req, res) => {
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on 5000"));