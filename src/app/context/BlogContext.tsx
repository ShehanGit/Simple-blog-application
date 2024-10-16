import React, { createContext, useState, ReactNode } from 'react';

interface BlogContextProps {
  posts: any[];
  addPost: (post: any) => void;
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<any[]>([]);

  const addPost = (post: any) => {
    setPosts([...posts, post]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
