import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';
import Shortcuts from './Shortcuts';
import WelcomeMessage from './WelcomeMessage';
import ProfilePicture from './ProfilePicture';
import ShortcutModal from './ShortcutModal';
import ParticleBackground from './ParticleSystem';

const HomePage: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState('User'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shortcuts, setShortcuts] = useState<Array<{ title: string; url: string; favicon: string }>>([]);

  useEffect(() => {
    setUserName("Eren");
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedShortcuts = localStorage.getItem('shortcuts');
    if (storedShortcuts) {
      setShortcuts(JSON.parse(storedShortcuts));
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addShortcut = (newShortcut: { title: string; url: string; favicon: string }) => {
    const updatedShortcuts = [...shortcuts, newShortcut];
    setShortcuts(updatedShortcuts);
    localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
    closeModal();
  };

  const removeShortcut = (index: number) => {
    const updatedShortcuts = shortcuts.filter((_, i) => i !== index);
    setShortcuts(updatedShortcuts);
    localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl p-8 bg-black bg-opacity-50 border border-[#c88164b5] rounded-lg shadow-2xl shadow-[#c88164b5] backdrop-blur-sm"
        >
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <WelcomeMessage time={time} />
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#f0b08c] via-[#f0d6a1] to-[#f0e6b2]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {userName}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ProfilePicture />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SearchBar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Shortcuts shortcuts={shortcuts} openModal={openModal} removeShortcut={removeShortcut} />
          </motion.div>
          <AnimatePresence>
            {isModalOpen && (
              <ShortcutModal isOpen={isModalOpen} onClose={closeModal} onAdd={addShortcut} />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
