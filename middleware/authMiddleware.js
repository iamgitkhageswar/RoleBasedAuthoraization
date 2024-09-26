const jwt =require("jsonwebtoken")
const verifyToken=(req,res,next)=>{
  let token;
  let authHeader=req.headers.authorization || req.headers.Authorization
  if(authHeader && authHeader.startsWith("Bearer")){
   token=authHeader.split(" ")[1]
   if(!token){
    res.status(401).json({message:"token not found"})  
  } 
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user=decoded
    next()
  } catch (error) {
    res.status(403).json({message:"invalid token"})
  }

  }else{
    res.status(401).json({message:"no token found"})
}
}
module.exports=verifyToken 