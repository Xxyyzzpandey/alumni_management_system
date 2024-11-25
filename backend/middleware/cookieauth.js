import jwt from 'jsonwebtoken';
import {alumni} from "../models/alumni.models.js"

const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken; // Get token from cookie

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const secretKey = process.env.JWTSECRET; // Your secret key
        const decoded = jwt.verify(token, secretKey); // Verify the token

        // Attach user information to request object
        req.user = decoded;

        // Proceed to next middleware
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
};

const cookieVerified=async (req,res)=>{
    const token = req.cookies.authToken;
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    const email=decoded.email;
    const user=await alumni.findOne({email})
    return res.status(200).send(user)
}

export { authenticateToken ,cookieVerified};
