import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  res.status(200).json({ message: "User logged in successfully" });
};

export const registerUser = (req: Request, res: Response) => {
  res.status(201).json({ message: "User registered successfully" });
};
