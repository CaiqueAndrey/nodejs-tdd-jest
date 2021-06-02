const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ message: 'Token not provided' });
    }

    const [, token] = authHeader.split(' '); // ignorando bearer e capturando token

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

        req.userId = decoded.id; //pegando o id que está dentro do jwt

        return next();
    }catch(err){
        return res.status(401).json({ message: 'Token invalid' });
    }
};