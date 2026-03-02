import { supabase } from "../config/supabase.js";

export const getWishlist = async (req, res) => {
  const { data, error } = await supabase.from("wishlist").select("*");

  if (error) return res.status(400).json({ error });

  res.json(data);
};

export const addWishlist = async (req, res) => {
  const { productId } = req.body;

  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ product_id: productId }]);

  if (error) return res.status(400).json({ error });

  res.json(data);
};

export const removeWishlist = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("product_id", id);

  if (error) return res.status(400).json({ error });

  res.json({ message: "Removed" });
};