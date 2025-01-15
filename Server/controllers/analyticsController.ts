import { Request, Response } from "express";

export const getAnalytics = (req: Request, res: Response) => {
  res.status(200).json({
    mentions: 120,
    positiveSentiment: 75,
    negativeSentiment: 15,
    neutralSentiment: 10,
  });
};
