// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="bg-gray-800 text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mon Blog</h1>
        <nav>
          <Link to="/" className="px-4 py-2 hover:bg-gray-700 rounded">Accueil</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-gray-700 rounded">À propos</Link>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
