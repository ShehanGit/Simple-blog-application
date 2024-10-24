// pages/posts/[id].tsx
"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlogPost } from '../../app/types';

const PostDetails = () => {
  const router = useRouter();
  // const { id } = useParams();
  const id = 1;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/posts/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPost(data);
          } else {
            console.error('Failed to fetch post');
          }
        } catch (error) {
          console.error('An error occurred while fetching the post', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{post.content}</p>
      <p className="text-gray-500">Author: {post.author}</p>
    </div>
  );
};

export default PostDetails;
