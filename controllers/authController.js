import { supabase } from "../config/supabase.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const { data, error } = await supabase
    .from("userstable")
    .insert([{ name, email, password }]);

  if (error) return res.status(400).json({ error });

  res.json({ message: "User created", data });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from("userstable")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ user: data });
};