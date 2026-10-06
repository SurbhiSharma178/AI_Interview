import jwt from "jsonwebtoken"

const genToken = async (userID, email) => {
  try {
    const token = jwt.sign({
      id: userID,
      email: email
    }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return token;
  } catch (error) {
    console.error(error);
  }

}

export default genToken