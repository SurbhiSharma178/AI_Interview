import React from "react";
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { publicApi } from "../api";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const Auth = ({ isModel = false }) => {
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const name = response.user.displayName;
      const email = response.user.email;
      const result = await publicApi.auth.google({ name, email });
      dispatch(setUserData(result.data));
    } catch (error) {
      dispatch(setUserData(null));
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-absolute bg-[#f3f3f3] flex items-center justify-center rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200"
      >
        <div className="flex item-center justify-center gap-3 mb-6">
          <div className="bg=black text-white p-2 rounded-l-lg">
            <BsRobot
              {...{
                stroke: "black",
                fill: "black",
                size: 24,
              }}
            />
          </div>
          <h2 className="font-semibold text-lg">Interview IQ</h2>
        </div>
        <h2 className="text-xl md:text-3xl font-semibold text-center leading-snug mb-4">
          Continue With
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2">
            <IoSparkles size={16} />
            AI Powered Interview Prep
          </span>
        </h2>
        <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
          Sign in to start AI-Powered interview, track your progress, and unlock
          detailed performance insights.
        </p>

        <motion.button
          whileHover={{ opacity: 0.9, scale: 1.03 }}
          whileTap={{ opacity: 1, scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow=md"
          onClick={handleGoogleAuth}
        >
          <FcGoogle size={24} />
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Auth;
