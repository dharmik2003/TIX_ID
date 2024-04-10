import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Define a custom interface to extend Request
interface AuthRequest extends Request {
  decoded?: any; // Define decoded property
  userId?: string; // Define userId property
}

const secretKey = "dharmik";
export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  console.log("token",token);

  try {
    const decoded = jwt.verify(token, secretKey) as { userId: string };
    console.log("decoded",decoded)
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
