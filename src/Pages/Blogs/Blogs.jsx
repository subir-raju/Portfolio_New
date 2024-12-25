import React, { useState } from "react";
import './Blogs.css'

const Blog = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogData = [
    {
      title: "Blog Post 1",
      details: <p>This is the content of the first blog post.</p>,
    },
    {
      title: "Blog Post 2",
      details: <p>This is the content of the second blog post.</p>,
    },
  ];

  const handleToggleDetails = (index) => {
    if (activeBlog === index) {
      setActiveBlog(null);
    } else {
      setActiveBlog(index);
    }
  };

  return (
    <div className="blog-page">
      <h1>My Blogs</h1>
      {blogData.length === 0 ? (
        <div className="no-posts">
          <p>Ooopsi, the author is too lazy to write something here!!</p>
        </div>
      ) : (
        <div className="blog-list">
          {blogData.map((blog, index) => (
            <div className="blog-item" key={index}>
              <div
                className={`blog-title ${activeBlog === index ? "active" : ""}`}
                onClick={() => handleToggleDetails(index)}
              >
                {blog.title}
              </div>
              {activeBlog === index && (
                <div className="blog-details">{blog.details}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
