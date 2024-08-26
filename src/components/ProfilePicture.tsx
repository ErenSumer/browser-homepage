import React from "react";
import { motion } from "framer-motion";

const ProfilePicture: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
    >
      <img
        src="./hero.png"
        alt="User Profile"
        className="w-32 h-32 rounded-full border-4 border-[#c88164b5] shadow-lg"
      />
    </motion.div>
  );
};

export default ProfilePicture;
