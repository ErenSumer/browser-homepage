import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShortcutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (shortcut: { title: string; url: string; favicon: string }) => void;
}

const ShortcutModal: React.FC<ShortcutModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const favicon = `https://www.google.com/s2/favicons?domain=${url}`;
    onAdd({ title, url, favicon });
    setTitle("");
    setUrl("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-black bg-opacity-80 border border-[#c88164b5] p-6 rounded-lg w-full max-w-md"
          >
            <h2 className="text-2xl mb-4 text-[#f0b08c]">Add Shortcut</h2>
            <form onSubmit={handleSubmit}>
              <motion.input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full mb-2 p-2 bg-black text-[#f0b08c] placeholder-[#c88164b5] border border-[#c88164b5] rounded focus:ring-2 focus:ring-[#f0b08c] focus:border-transparent"
                required
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL"
                className="w-full mb-4 p-2 bg-black text-[#f0b08c] placeholder-[#c88164b5] border border-[#c88164b5] rounded focus:ring-2 focus:ring-[#f0b08c] focus:border-transparent"
                required
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                className="flex justify-end"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 bg-black text-[#f0b08c] border border-[#c88164b5] rounded hover:bg-[#c88164b5] hover:text-black transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-[#c88164b5] text-black rounded hover:bg-[#f0b08c] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShortcutModal;
