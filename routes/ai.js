import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

// API key
const genAI = new GoogleGenerativeAI("AIzaSyA-T8Ky4VGSrK0Hwx9ACkGUuKHQt9Y2V3g");

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // correct model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-002"
    });

    const result = await model.generateContent(message);

    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    console.error("Gemini error:", error);

    res.json({
      reply: "AI error 😅 Try again"
    });
  }
});

export default router;