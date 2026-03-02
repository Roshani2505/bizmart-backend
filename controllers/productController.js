import { supabase } from "../config/supabase.js";

export const getProducts = async (req, res) => {
  const { data, error } = await supabase.from("products").select("*");

  if (error) return res.status(400).json({ error });

  res.json(data);
};