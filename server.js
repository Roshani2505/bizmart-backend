import express from "express";
import cors from "cors";
import { Cashfree } from "cashfree-pg";
import aiRoutes from "./routes/ai.js"; // ✅ AI ROUTE IMPORT

const app = express();

app.use(cors());
app.use(express.json());

/* -------- CASHFREE CONFIG -------- */

const cashfree = new Cashfree(
Cashfree.SANDBOX,
process.env.CASHFREE_APP_ID,
process.env.CASHFREE_SECRET_KEY
);

/* -------- AI CHATBOT ROUTE -------- */

app.use("/api/ai", aiRoutes); // ✅ AI ROUTE


/* -------- TEST ROUTE -------- */

app.get("/", (req, res) => {
res.send("API Working 🚀");
});


/* -------- AUTH ROUTES -------- */

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


/* -------- PRODUCTS -------- */

app.get("/api/products", (req, res) => {
res.json([]);
});


/* -------- CART -------- */

app.get("/api/cart", (req, res) => {
res.json([]);
});

app.post("/api/cart", (req, res) => {
res.json({ success: true });
});


/* -------- PAYMENT CREATE ORDER -------- */

app.post("/api/payment/create-order", async (req, res) => {

try {

const { amount } = req.body;

const request = {
order_amount: amount,
order_currency: "INR",
order_id: "order_" + Date.now(),

customer_details: {
customer_id: "cust_" + Date.now(),
customer_email: "customer@test.com",
customer_phone: "9999999999"
}
};

const response = await cashfree.PGCreateOrder("2023-08-01", request);

res.json({
payment_session_id: response.data.payment_session_id
});

} catch (error) {

console.log("Cashfree error:", error);

res.status(500).json({
error: "Payment creation failed"
});

}

});


/* -------- START SERVER -------- */

app.listen(5000, () => {
console.log("Server running on http://localhost:5000 🚀");
});