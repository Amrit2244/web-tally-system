// src/utils/getUsernameFromToken.ts
import jwt from 'jsonwebtoken';

export const getUsernameFromToken = (token: string): string | null => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string); // Ensure JWT_SECRET is set
    return decoded.username || null; // Return the username from the decoded token
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
