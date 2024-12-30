import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../services/api";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    const loadBlog = async () => {
      const data = await fetchBlogs();
      setBlog(data);
    };
    loadBlog();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;