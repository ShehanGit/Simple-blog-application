// pages/api/posts.ts

import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post', author: 'Author 1' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post', author: 'Author 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(posts);
      break;
    case 'POST':
      const newPost = { ...req.body, id: posts.length + 1 };
      posts.push(newPost);
      res.status(201).json(newPost);
      break;
    case 'PUT':
      const { id } = req.body;
      posts = posts.map(post => (post.id === id ? { ...post, ...req.body } : post));
      res.status(200).json({ message: 'Post updated successfully' });
      break;
    case 'DELETE':
      const { postId } = req.query;
      posts = posts.filter(post => post.id !== parseInt(postId as string, 10));
      res.status(200).json({ message: 'Post deleted successfully' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
