import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsFileText,
  BsFileEarmarkPdf,
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { IoLayersOutline } from "react-icons/io5";

import { useNavigate } from "react-router";
import AuthModel from "../components/AuthModel";

// import evalImage from "../../assets/images/HR.png";
import hrImage from "../../assets/images/HR.png";
import techImg from "../../assets/images/tech.jpeg";
import configImg from "../../assets/images/config.png";
import creditImg from "../../assets/images/credit.jpeg";
import resumeImg from "../../assets/images/resume.jpg";
import pdfImg from "../../assets/images/pdf.png";
import analyticsImg from "../../assets/images/history.jpeg";

const Home = () => {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <div className="flex-1 px-6 py-10">
        <div className="flex justify-center mb-2">
          <div className="bg=gray-100 text-gray-600 text-sm px-3 py-1 rounded-full flex items-center gap-2">
            <HiSparkles size={16} className="bg-yellow-100 text-yellow-600" />
            AI-Powered Interview Preparation Platform
          </div>
        </div>
        <div className="text-center mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl mx-auto"
          >
            Practice Interviews With
            <br></br>
            <span className="bg-green-100 text-green-600 px-5 py-1 rounded-3xl ">
              AI Intelligence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg"
          >
            Role Based mock interviews with Smart follow-ups adaptive difficulty
            and real-time performance analysis.
          </motion.p>
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                navigate("/interview-type");
              }}
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              className="bg-black text-white px-10 py-2 rounded-full text-lg hover:opacity-90 teansition shadow-md"
            >
              Start Interview
            </motion.button>
            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                navigate("/history");
              }}
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              className="border border-gray-500 px-10 py-2 rounded-full hover:bg-gray-100 transition "
            >
              View History
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10  mx-10 mb-20 ">
          {[
            {
              icon: <BsRobot size={24} />,
              step: "STEP 1",
              title: "Role & Experience Selection",
              desc: "AI adjusts difficulty based on selected job role and experience level.",
            },
            {
              icon: <IoLayersOutline size={24} />,
              step: "STEP 2",
              title: "Select No. of Questions",
              desc: "AI generates questions based on selected role and experience level.",
            },
            {
              icon: <BsMic size={24} />,
              step: "STEP 3",
              title: "Smart Voice Interview",
              desc: "Dynamic follow-ups based on your responses.",
            },
            {
              icon: <BsClock size={24} />,
              step: "STEP 4",
              title: "Timer Based Simulation",
              desc: "Real Interview pressure with time tracking. ",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              whileHover={{ rotate: 0, scale: 1.06 }}
              className={`relative bg-white rounded-3xl border-2 border-green-100 hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl 
            transition-all duration-300
            ${index === 0 ? "rotate-[-4deg]" : ""}
            ${index === 1 ? "rotate-[3deg] md: mt-6 shadow-xl" : ""}
            ${index === 2 ? "rotate-[-3deg]" : ""}
            ${index === 3 ? "rotate=[3deg] md: mt-6 shadow-xl " : ""}`}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ">
                {item.icon}
              </div>
              <div className="pt-2 text-center">
                <div className="text-xs text-green-600 font-bold mb-2 tracking-wider">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2 text-lg  ">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mb-25">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-center mb-16"
          >
            Advanced AI <span className="text-green-600"> Capabilities</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                image: evalImage,
                icon: <BsBarChart size={20} />,
                title: "AI answer evaluation",
                desc: "Score communtication, techinal accuracy and confidence.",
              },
              {
                image: resumeImg,
                icon: <BsFileEarmarkText size={20} />,
                title: "Resume Based Interview",
                desc: "Project-specific questions based on your resume.",
              },
              {
                image: pdfImg,
                icon: <BsFileEarmarkPdf size={20} />,
                title: "Downloadable PDF Report",
                desc: "Score communtication, techinal accuracy and confidence.",
              },
              {
                image: analyticsImg,
                icon: <BsBarChart size={20} />,
                title: "History & Analytics",
                desc: "Track progress with performance graphs and topic analysis.",
              },
            ].map((items, index) => {
              <div></div>;
            })}
          </div>
        </div>
      </div>
      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Home;
