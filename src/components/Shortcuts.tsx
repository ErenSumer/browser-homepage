import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShortcutsProps {
  shortcuts: Array<{ title: string; url: string; favicon: string }>;
  openModal: () => void;
  removeShortcut: (index: number) => void;
}

const Shortcuts: React.FC<ShortcutsProps> = ({
  shortcuts,
  openModal,
  removeShortcut,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <motion.div
        className="grid grid-cols-4 gap-4 mb-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {shortcuts.map((shortcut, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.a
                href={shortcut.url}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(200, 129, 100, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-4 bg-black bg-opacity-50 border border-[#c88164b5] rounded-lg transition-all duration-300"
              >
                <img
                  src={shortcut.favicon}
                  alt={shortcut.title}
                  className="w-10 h-10 mb-2"
                />
                <span className="text-sm">{shortcut.title}</span>
              </motion.a>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.button
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      removeShortcut(index);
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    X
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <motion.button
        onClick={openModal}
        className="mt-4 bg-[#c88164b5] text-black px-6 py-3 justify-center rounded-md transition duration-300 text-lg font-semibold"
        whileHover={{ scale: 1.05, backgroundColor: "#f0b08c" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Add Shortcut
      </motion.button>
    </motion.div>
  );
};

export default Shortcuts;
