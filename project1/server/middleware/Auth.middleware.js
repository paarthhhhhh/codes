import jwt from 'jsonwebtoken'

const jwtAuthMiddleware = (req,res,next) =>{
      const authorization = req.headers.authorization
      if(!authorization) return res.status(401).json({msg:"Token not found"})

      const token = req.headers.authorization.split(' ')[1];
      if(!token) return res.status(401).json({msg:"Unauthorized"})

      try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = decoded
            next();
      } catch (error) {
            res.status(401).json({msg: "Invalid token"})
      }
}
const generateToken = (userData) =>{
      return jwt.sign(userData,process.env.JWT_SECRET, {expiresIn: 3000})
}

export {jwtAuthMiddleware,generateToken}