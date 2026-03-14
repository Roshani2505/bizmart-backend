import express from "express";
import { Cashfree } from "cashfree-pg";

const router = express.Router();

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

router.post("/create-order", async (req, res) => {
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

    const response = await Cashfree.PGCreateOrder("2023-08-01", request);

    res.json(response.data);

  } catch (error) {

    console.log(error);
    res.status(500).json({ error: "Payment creation failed" });

  }
});

export default router;