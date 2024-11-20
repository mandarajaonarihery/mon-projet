// src/pages/PostPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = ({ posts }) => {
  // Déclaration des hooks avant toute condition
  const [newComment, setNewComment] = useState(""); // Pour le commentaire
  const [comments, setComments] = useState([]); // Pour stocker les commentaires

  // Récupérer le slug de l'URL
  const { slug } = useParams(); 
  
  // Si les posts ne sont pas disponibles
  if (!posts || posts.length === 0) {
    return <div>Aucun article trouvé.</div>; // Si les posts sont inexistants
  }

  // Trouver l'article par son slug
  const post = posts.find(p => p.slug === slug); 
  if (!post) {
    return <div>Article non trouvé</div>; // Si l'article n'existe pas
  }

  // Gérer l'ajout d'un commentaire
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { author: 'Utilisateur', text: newComment }]);
      setNewComment(""); // Réinitialiser le champ de commentaire après ajout
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-3xl font-semibold mb-4">{post.title}</h2>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-4">{post.content}</p>

      {/* Formulaire pour ajouter un commentaire */}
      <div className="mt-4">
        <h3 className="font-semibold">Ajouter un commentaire</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          className="w-full p-2 border rounded-lg mt-2"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-500 text-white p-2 rounded-lg"
        >
          Ajouter un commentaire
        </button>
      </div>

      {/* Affichage des commentaires */}
      <div className="mt-4">
        <h3 className="font-semibold">Commentaires</h3>
        <ul className="list-disc pl-4">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-600">
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostPage;
