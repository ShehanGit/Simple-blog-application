"use client";

// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../app/components/Navbar';
import { BlogPost } from '../app/types';

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post',
    excerpt: 'This is the excerpt for the first post.',
    content: 'This is the content for the first post.',
    author: 'Author 1'
  },
  {
    id: '2',
    title: 'Second Post',
    excerpt: 'This is the excerpt for the second post.',
    content: 'This is the content for the second post.',
    author: 'Author 2'
  }
];

const HomePage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching posts from a backend
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Simple Blog Application</h1>
        {posts.length === 0 ? (
          <p>No blog posts available. Please add some posts.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: BlogPost) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link href={`/posts/${post.id}`} className="text-blue-500 mt-4 inline-block">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        )}
        <Link href="/add-post" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add New Post
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
