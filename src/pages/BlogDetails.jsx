import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../services/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const data = await fetchBlogById(id);
      setBlog(data);
    };
    loadBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.summary}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default BlogDetails;
