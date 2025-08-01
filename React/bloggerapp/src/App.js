import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const books = [
    { title: "React Mastery", author: "Dan Abramov" },
    { title: "JavaScript Deep Dive", author: "Kyle Simpson" },
  ];

  const blogs = [
    { title: "Why React?", content: "React is a JavaScript library..." },
    { title: "JSX Tips", content: "JSX lets you write HTML in JS..." },
  ];

  const courses = [
    { id: 1, name: "React Basics", duration: 3 },
    { id: 2, name: "Advanced JS", duration: 2 },
  ];

  return (
    <div className="App">
      <h1>🧑‍💻 BloggerApp</h1>

      <button onClick={() => setShowBooks(!showBooks)}>
        Toggle Books
      </button>
      <button onClick={() => setShowBlogs(!showBlogs)}>
        Toggle Blogs
      </button>
      <button onClick={() => setShowCourses(!showCourses)}>
        Toggle Courses
      </button>

      <hr />
      {showBooks ? <BookDetails books={books} /> : <p>Books section hidden.</p>}
      {showBlogs && <BlogDetails blogs={blogs} />}
      <CourseDetails courses={showCourses ? courses : []} />
    </div>
  );
}

export default App;
