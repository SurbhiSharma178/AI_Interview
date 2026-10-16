import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", isAuth, getUser)

export default router;