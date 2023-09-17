import JWT from 'jsonwebtoken';



export const Authenticate = async (req, res, next) => {
  try {
    console.log("start Token")
    const token = req.headers.authorization;
    if (token) {
      JWT.verify(token, process.env.JWT_TOKEN, function (error, decode) {
        if (error) {
          res.json({ status:false,message:"Token is expired or invalid. Please try again." });
        } else {

          req.user = decode.id;
          console.log(decode.id);
          console.log("get token")
          next();
        }
      });
    } else {
      res.json({status:false,message:"No token provided.Access denied."});
    }
  } catch (error) {
    res.json({status:false,message:"Something went wrong."});
  }
};

