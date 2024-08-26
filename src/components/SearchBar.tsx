import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  };

  const handleLucky = () => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}&btnI`;
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className="mb-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center bg-black bg-opacity-50 border border-[#c88164b5] rounded-full p-3 transition-all duration-300 focus-within:shadow-lg focus-within:shadow-[#c88164b5]">
        <FaSearch className="text-[#f0b08c] ml-2 text-xl" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Google..."
          className="flex-grow bg-transparent outline-none ml-3 text-[#f0b08c] placeholder-[#c88164b5] text-lg"
        />
      </div>
      <div className="flex justify-center mt-6">
        <motion.button
          type="submit"
          className="bg-[#c88164b5] text-black px-6 py-3 rounded-md mr-4 transition duration-300 text-lg font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "#f0b08c" }}
          whileTap={{ scale: 0.95 }}
        >
          Google Search
        </motion.button>
        <motion.button
          type="button"
          onClick={handleLucky}
          className="bg-[#c88164b5] text-black px-6 py-3 rounded-md transition duration-300 text-lg font-semibold"
          whileHover={{ scale: 1.05, backgroundColor: "#f0b08c" }}
          whileTap={{ scale: 0.95 }}
        >
          I'm Feeling Lucky
        </motion.button>
      </div>
    </motion.form>
  );
};

export default SearchBar;
