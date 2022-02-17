import React from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
const Post = () => {
  return (
    <div>
      <Routes>
        <Route path="/show" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
};
export default Post;
