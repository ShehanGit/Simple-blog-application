const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let posts = [
  {
    id: 1,
    title: 'First Post',
    excerpt: 'This is the excerpt for the first post.',
    content: 'This is the content for the first post.',
    author: 'Author 1'
  },
  {
    id: 2,
    title: 'Second Post',
    excerpt: 'This is the excerpt for the second post.',
    content: 'This is the content for the second post.',
    author: 'Author 2'
  }
];

// Get all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Get a specific post by ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

// Add a new post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    ...req.body
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update an existing post
app.put('/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');

  const { title, excerpt, content, author } = req.body;
  post.title = title;
  post.excerpt = excerpt;
  post.content = content;
  post.author = author;

  res.json(post);
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Post not found');

  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock REST API server is running on http://localhost:${PORT}`);
});
