import jwt from 'jsonwebtoken'; //importing jwt module

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: "Token is required" });
    }

    const token = authHeader.split(' ')[1]; // Bearer eyJhbGci... -> sadece token kısmı

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        next();
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: "Invalid token" });
    }
}


export default verifyToken; //exporting the verify Token function