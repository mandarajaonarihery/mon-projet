// src/pages/Home.js
import React from 'react';
import BlogPost from '../components/BlogPost';

const Home = () => {
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
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur le Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
