import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '../../../types';

// Mock Data (same as above)
let posts: BlogPost[] = [
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

// Handle GET, PUT, DELETE requests for a specific post
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const postIndex = posts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (req.method === 'GET') {
    res.status(200).json(posts[postIndex]);
  } else if (req.method === 'PUT') {
    // Update a post
    const { title, excerpt, content, author } = req.body;
    posts[postIndex] = { ...posts[postIndex], title, excerpt, content, author };
    res.status(200).json(posts[postIndex]);
  } else if (req.method === 'DELETE') {
    // Delete a post
    const deletedPost = posts.splice(postIndex, 1);
    res.status(200).json(deletedPost[0]);
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
