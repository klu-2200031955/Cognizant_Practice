import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h2>📝 Blog Posts</h2>
      {blogs.length > 0 &&
        blogs.map((blog, idx) => (
          <div key={idx}>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
    </div>
  );
};

export default BlogDetails;
