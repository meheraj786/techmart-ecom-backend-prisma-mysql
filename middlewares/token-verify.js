const jwt=require("jsonwebtoken")

exports.tokenVerify=(req,res,next)=>{
  try {
    const token =req.headers.authorization.split(" ")[1]
  if (!token) return res.json("Token Issue")
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
    console.log(decoded) 
    next()
  });
  } catch (error) {
    res.status(400).json({message: "Server Issue"})
  }
}