// pages/api/posts/[postId].ts

import { NextApiRequest, NextApiResponse } from 'next';

let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post', author: 'Author 1' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post', author: 'Author 2' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { postId } = req.query;

  switch (method) {
    case 'GET':
      // Find post by ID
      const post = posts.find((post) => post.id === parseInt(postId as string, 10));
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
      break;
    case 'PUT':
      // Update a post
      const postIndex = posts.findIndex((post) => post.id === parseInt(postId as string, 10));
      if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
      }

      posts[postIndex] = { ...posts[postIndex], ...req.body };
      res.status(200).json(posts[postIndex]);
      break;
    case 'DELETE':
      // Delete a post
      posts = posts.filter((post) => post.id !== parseInt(postId as string, 10));
      res.status(200).json({ message: 'Post deleted successfully' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
