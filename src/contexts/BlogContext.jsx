import { createContext } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  let blogContent = {
    blogs: [
      {
        id: 1,
        title: "blog post one",
      },
      {
        id: 2,
        title: "blog post two",
      },
      {
        id: 3,
        title: "blog post three",
      },
      {
        id: 4,
        title: "blog post four",
      },
      {
        id: 5,
        title: "blog post five",
      },
      {
        id: 6,
        title: "blog post six",
      },
      {
        id: 7,
        title: "blog post seven",
      },
      {
        id: 8,
        title: "blog post eight",
      },
      {
        id: 9,
        title: "blog post nine",
      },
      {
        id: 10,
        title: "blog post ten",
      },
    ],
  };
  return (
    <BlogContext.Provider value={blogContent}>{children}</BlogContext.Provider>
  );
};

export default BlogProvider;
