// src/components/BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-semibold my-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
      <Link
        to={`/post/${post.slug}`}
        className="text-blue-500 hover:underline"
      >
        Lire la suite
      </Link>
    </div>
  );
};

export default BlogPost;
