// pages/api/posts/index.ts

import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post', author: 'Author 1' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post', author: 'Author 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Return all posts
      res.status(200).json(posts);
      break;
    case 'POST':
      // Add a new post
      const newPost = { ...req.body, id: posts.length + 1 };
      posts.push(newPost);
      res.status(201).json(newPost);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
