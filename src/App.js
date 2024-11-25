// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import Header from './components/Header';

const App = () => {
  const posts = [
    {
      title: 'Première publication',
      content: 'Ceci est un exemple de blog...',
      slug: 'premiere-publication',
      image: '/images/stage.jpg',
      comments: [
        { author: 'Alice', text: 'Super article !' },
        { author: 'Bob', text: 'Merci pour le partage.' },
      ],
    },
    {
      title: 'Deuxième publication',
      content: 'Encore un autre article...',
      slug: 'deuxieme-publication',
      image: '/images/yk.png',
      comments: [
        { author: 'Charlie', text: 'Très intéressant, merci !' },
      ],
    },
  ];

  return (
    <Router>
      {/* Le header est affiché avant les routes */}
      <Header />

      <div className="container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:slug" element={<PostPage posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
