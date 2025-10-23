"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "recommended", label: "Recommended" },
    { id: "experience", label: "Experience" },
  ];

  const tabContent = {
    about: (
      <p className="text-sm text-gray-200 p-2">
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
        at this awesome company for 3 years now. <br />
        <br />I was born and raised in Albany, NY & have been living in Santa
        Carla for the past 10 years with my wife Tiffany and our 4-year-old twin
        daughters — Emma and Ella. Both of them are just starting school, so my
        calendar is usually blocked between 9–10 AM.
      </p>
    ),
    recommended: (
      <p className="text-sm text-gray-200">Recommended content...</p>
    ),
    experience: <p className="text-sm text-gray-200">Experience details...</p>,
  };

  return (
    <div className="bg-[#2B2E3C] shadow-lg rounded-2xl p-8 w-full max-w-md mx-auto">
      <div className="relative flex justify-around mb-4 bg-black rounded-full p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}

        <motion.div
          layoutId="underline"
          className="absolute bottom-1 top-1 bg-gray-700 rounded-full"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{
            width:
              activeTab === "about"
                ? "33%"
                : activeTab === "recommended"
                ? "33%"
                : "33%",
            left:
              activeTab === "about"
                ? "2%"
                : activeTab === "recommended"
                ? "34%"
                : "67%",
          }}
        />
      </div>
      <div className="bg-[#1F2230] rounded-xl p-4 h-48 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full"
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabsWidget;

