import jwt from 'jsonwebtoken';
const JWT_SEED = 'umeals';

export class JwtAdapter {
    static async generateToken(payload, duration = '7d') {
        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (error, token) => {
                if (error) return resolve(null);
                return resolve(token);
            });
        });
    }

    static validateToken(token) {
        return new Promise((resolve) => {
            jwt.verify(token, JWT_SEED, (err, decoded) => {
                if (err) return resolve(null);
                resolve(decoded);
            });
        });
    }
}
