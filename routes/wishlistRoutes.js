import express from "express";
import {
  getWishlist,
  addWishlist,
  removeWishlist
} from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/", getWishlist);
router.post("/", addWishlist);
router.delete("/:id", removeWishlist);

export default router;