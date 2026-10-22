import jwt from "jsonwebtoken"

export const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized User"
      })
    };

    const verifyUser = jwt.verify(token, process.env.JWT_SECRET)
    // console.log("verifyUSer", verifyUser)
    if (!verifyUser) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized User"
      })
    }
    req.userID = verifyUser.id
    req.email = verifyUser.email
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })

  }
}