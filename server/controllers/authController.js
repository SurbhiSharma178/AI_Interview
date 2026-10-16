import genToken from "../config/auth.js";
import User from "../models/userModel.js"


export const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email: email })

    if (!user) {
      user = await User.create({
        name,
        email
      })
      console.log("user created now token creation")
      const token = await genToken(user._id, user.email)
      res.cookie("token", token, {
        httpOnly: true, secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
      return res.status(201).json({
        success: true,
        message: "User logged in successfuly",
        user: user
      })
    }
    const token = await genToken(user._id, user.email)
    res.cookie("token", token, {
      httpOnly: true, secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(200).json({
      success: true,
      message: "User Logged in successFully",
      user: user
    })

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logout successfully"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })

  }

}