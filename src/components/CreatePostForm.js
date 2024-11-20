import React, { useState } from 'react';

const CreatePostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Sélectionne la première image
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newPost = {
        title,
        content,
        slug: title.toLowerCase().replace(/\s+/g, '-'), // Crée un slug à partir du titre
        image: URL.createObjectURL(image), // Utilise l'image téléchargée
        comments: [], // Pas de commentaires au début
      };
      addPost(newPost); // Ajoute la publication
      setTitle('');
      setContent('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Titre</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entrez le titre de votre publication"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">Contenu</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Entrez le contenu de votre publication"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700">Ajouter une image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Publier
      </button>
    </form>
  );
};

export default CreatePostForm;
