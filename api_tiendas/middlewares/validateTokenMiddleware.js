import { JwtAdapter } from '../config/jwt.adapter.js';

export const validateTokenMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']; 

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = await JwtAdapter.validateToken(token);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded; 
        next(); 
    } catch (error) {
        console.error('Error validating token:', error);
        return res.status(500).json({ message: 'Error validating token' });
    }
};
