import jwt from 'jsonwebtoken';

const generateToken = (userId: string) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
};

const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string);
};

export { generateToken, verifyToken };
