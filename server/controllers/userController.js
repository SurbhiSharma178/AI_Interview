import User from "../models/userModel.js"


export const getUser = async (req, res) => {
  try {
    const userID = req.userID
    // console.log(userID)
    const user = await User.findById(userID)
    console.log(user)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }
    return res.status(200).json({
      success: true,
      message: "User found",
      user: user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}