import React from "react";
import { motion } from "framer-motion";

interface WelcomeMessageProps {
  time: Date;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ time }) => {
  const hour = time.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <motion.h1
      className="text-xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {greeting}{" "}
      <motion.span
        initial={{ rotate: -20 }}
        animate={{ rotate: 20 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        👋
      </motion.span>
    </motion.h1>
  );
};

export default WelcomeMessage;
