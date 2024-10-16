import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '../../../types';

// Mock Data
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

// Handle GET and POST requests
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all posts
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    // Create a new post
    const { title, excerpt, content, author } = req.body;

    const newPost: BlogPost = {
      id: (posts.length + 1).toString(),
      title,
      excerpt,
      content,
      author,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
