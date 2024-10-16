import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { useRouter } from 'next/router';

const AddPostPage = () => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random().toString(),
      title,
      excerpt: content.substring(0, 100),
      content
    };
    addPost(newPost);
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block w-full mb-4 p-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="block w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
