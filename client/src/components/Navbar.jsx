import React from "react";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="bg=[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative"
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <div></div>
          <h1>Interview</h1>
        </div>
        Navbar
      </motion.div>
    </div>
  );
};

export default Navbar;
