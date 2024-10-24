// Update the "Add New Post" Link in the HomePage component to navigate to the AddPostPage by providing the correct href

"use client";

// pages/page.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../app/components/Navbar';
import { BlogPost } from '../app/types';
import { useRouter } from 'next/navigation';



const HomePage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('An error occurred while fetching posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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
        {/* Update the onClick to navigate to the correct AddPostPage route */}
        {/* <button
          onClick={() => router.push('/add')}
          className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add New Post
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;